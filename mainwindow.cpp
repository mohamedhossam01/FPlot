#include "mainwindow.h"
#include "ui_mainwindow.h"
#include "exprtk.hpp"
#include <QString>
#include <QMessageBox>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    connect(ui->plot,SIGNAL(clicked()),this,SLOT(plot()));
    ui->minX->setValidator(new QDoubleValidator(-100000,100000,10,this));
    ui->maxX->setValidator(new QDoubleValidator(-100000,100000,10,this));
    ui->step->setValidator(new QDoubleValidator(0,100000,5,this));
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::plot()
{
    //checking if all lineedits have values
    if(!ui->minX->text().length() ||
       !ui->maxX->text().length() ||
       !ui->step->text().length() ||
       !ui->function->text().length())
    {
        QMessageBox::critical(this,"Error","Please enter data in all fields",QMessageBox::Button::Ok);
        return;
    }

    //getting data from lineedits, calculating number of points based on data collected
    double minX = ui->minX->text().toDouble();
    double maxX = ui->maxX->text().toDouble();
    double step = ui->step->text().toDouble();
    int points = std::ceil((maxX - minX) * 1.0 / step) + 1;

    //data validation
    if(maxX<=minX)
    {
        QMessageBox::warning(this,"Error","Max X must be greater than Min X",QMessageBox::Button::Ok);
        return;
    }
    if(minX+step>maxX)
    {
        QMessageBox::warning(this,"Error","Step is too large. Please enter a smaller step",QMessageBox::Button::Ok);
        return;
    }
    if(step<=0.0)
    {
        QMessageBox::warning(this,"Error","Step must be greater than zero",QMessageBox::Button::Ok);
        return;
    }
    if(points > 1e7)
    {
        QMessageBox::StandardButton reply = QMessageBox::question(this,"Warning","Step is too small, which can take some time to plot\nAre you sure you want to continue?",QMessageBox::Button::Yes|QMessageBox::Button::No);
        if(reply == QMessageBox::No)return;
    }

    //curr is current value of x
    double curr = minX;

    //removing all whitespaces from function lineedit, then converting it to std string
    std::string expression_string = ui->function->text().simplified().replace(" ","").toStdString();

    //creating symbol table which holds current value of x to evaluate function at that value of x
    exprtk::symbol_table<double> table;
    table.add_variable("x",curr);
    table.add_constants();

    //adding that symbol table to expression to be parsed
    exprtk::expression<double> exp;
    exp.register_symbol_table(table);

    exprtk::parser<double> parser;

    //function validation
    if(!parser.compile(expression_string,exp))
    {
        QMessageBox::critical(this,"Error","Function is invalid. Please enter a valid function of x",QMessageBox::Button::Ok);
        return;
    }

    //iterating from minX to maxX and calculating value of corresponding y
    double minY = 2e9 + 7;
    double maxY = -(2e9 + 7);
    QVector<double> x(points), y(points);
    for (int i=0; i<points; ++i)
    {
        x[i] = curr;
        y[i] = exp.value();
        minY = std::min(minY,y[i]);
        maxY = std::max(maxY,y[i]);
        curr += step;
    }

    //shifting y-axis up a little if minimum value of y is greater than 0 to make that minimum value better visibility
    if(minY > 0) minY -= (maxY - minY) / 10;

    //handling when both min and max values of y are almost equal by centering the graph vertically
    //example function is: f(x) = 5 or f(x) = sin(x)^2 + cos(x)^2
    if(maxY - minY < 1e-4)
    {
        minY--;
        maxY++;
    }

    // create graph and assigning data to it:
    ui->customPlot->addGraph();
    ui->customPlot->graph(0)->setData(x, y);

    //handling when range of y is so huge by clipping y range to a suitable range
    //example function is: f(x) = 1/x , range: [-5:0.01:5]
    if(maxY - minY > 1e7)
    {
        //we can sort y since it's already passed to the graph so we can change y with no risks
        std::sort(y.begin(),y.end());
        int i = 1;
        int j = y.size()-2;
        //choose two new values of min,max y such that difference between them is less than 10^7, min must be less than max obviously
        while(i<j-3 && maxY - minY > 1e7)
        {
            minY = y[i++];
            maxY = y[j--];
        }
        //This next condition will be true only if we couldn't find such values of new min, max y
        //Example function is: f(x) = x^x^x, range: [0:0.01:6]
        //However, some functions can still be not drawn
        //Such as: f(x) = x^x^x, range: [9:0.01:10] as numbers are extremly large and won't fit in doubles to compare them
        //So nothing will be drawn and there is nothing to do about this
        if(i>=j-3)
        {
            QMessageBox::warning(this,"Error","Function is very large. Please enter a smaller range of x",QMessageBox::Button::Ok);
            ui->customPlot->removeGraph(0);
            ui->customPlot->replot();
            return;
        }
    }

    // set axes labels:
    ui->customPlot->xAxis->setLabel("X");
    ui->customPlot->yAxis->setLabel("f(X)");

    // set axes ranges
    ui->customPlot->xAxis->setRange(minX, maxX);
    ui->customPlot->yAxis->setRange(minY, maxY);

    ui->customPlot->replot();
}

