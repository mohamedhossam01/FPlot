import * as names from 'names.js';

function main() {
    startApplication("FPlot");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "<NumPad5>");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "*x^3");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "<NumPad+>");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "<NumPad2>");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "<NumPad*>");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "x");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "<Tab>");
    type(waitForObject(names.mainWindowMinXQLineEdit), "<NumPad->");
    type(waitForObject(names.mainWindowMinXQLineEdit), "<NumPad5>");
    type(waitForObject(names.mainWindowMinXQLineEdit), "<Tab>");
    type(waitForObject(names.mainWindowStepQLineEdit), "<NumPad0>");
    type(waitForObject(names.mainWindowStepQLineEdit), "<NumPad.>");
    type(waitForObject(names.mainWindowStepQLineEdit), "<NumPad0>");
    type(waitForObject(names.mainWindowStepQLineEdit), "<NumPad5>");
    type(waitForObject(names.mainWindowStepQLineEdit), "<Tab>");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<NumPad5>");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<Tab>");
    type(waitForObject(names.mainWindowPlotQPushButton), " ");
    test.imagePresent("5x^3+2x", {'tolerant': true,'threshold': 98 }, waitForObjectExists(names.mainWindowMainWindow));

    mouseDrag(waitForObject(names.mainWindowFunctionQLineEdit), 101, 10, -190, -22, 1, Qt.LeftButton);
    type(waitForObject(names.mainWindowFunctionQLineEdit), "sin(x)");
    mouseDrag(waitForObject(names.mainWindowMinXQLineEdit), 55, 11, -47, 0, 1, Qt.LeftButton);
    type(waitForObject(names.mainWindowMinXQLineEdit), "<NumPad6>");
    type(waitForObject(names.mainWindowMinXQLineEdit), "<NumPad.>");
    type(waitForObject(names.mainWindowMinXQLineEdit), "<NumPad2>");
    type(waitForObject(names.mainWindowMinXQLineEdit), "<NumPad8>");
    mouseDrag(waitForObject(names.mainWindowMaxXQLineEdit), 92, 10, -159, 3, 1, Qt.LeftButton);
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<NumPad6>");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<NumPad.>");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<NumPad2>");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<NumPad8>");
    clickButton(waitForObject(names.mainWindowPlotQPushButton));
    test.imagePresent("sin(x)", {'tolerant': true,'threshold': 98 }, waitForObjectExists(names.mainWindowMainWindow));
    
    mouseClick(waitForObject(names.mainWindowMinXQLineEdit), 9, 11, Qt.NoModifier, Qt.LeftButton);
    type(waitForObject(names.mainWindowMinXQLineEdit), "<Backspace>");
    mouseClick(waitForObject(names.mainWindowMaxXQLineEdit), 63, 10, Qt.NoModifier, Qt.LeftButton);
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<Backspace>");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<Backspace>");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<Backspace>");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<Backspace>");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<Backspace>");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<NumPad->");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<NumPad6>");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<NumPad.>");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<NumPad2>");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<NumPad8>");
    sendEvent("QMouseEvent", waitForObject(names.mainWindowPlotQPushButton), QEvent.MouseButtonPress, 179, 8, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(names.mainWindowPlotQPushButton), QEvent.MouseButtonRelease, 179, 8, Qt.LeftButton, 0, 0);
    test.compare(waitForObjectExists(names.errorQtMsgboxLabelQLabel).text, "Max X must be greater than Min X");
    clickButton(waitForObject(names.errorOKQPushButton));
    mouseClick(waitForObject(names.mainWindowFunctionQLineEdit), 105, 14, Qt.NoModifier, Qt.LeftButton);
    type(waitForObject(names.mainWindowFunctionQLineEdit), "<Shift+Home>");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "<NumPad5>");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "^x");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "<Tab>");
    type(waitForObject(names.mainWindowMinXQLineEdit), "<NumPad->");
    type(waitForObject(names.mainWindowMinXQLineEdit), "<NumPad1>");
    type(waitForObject(names.mainWindowMinXQLineEdit), "<NumPad0>");
    type(waitForObject(names.mainWindowMinXQLineEdit), "<Tab>");
    type(waitForObject(names.mainWindowStepQLineEdit), "<NumPad0>");
    type(waitForObject(names.mainWindowStepQLineEdit), "<NumPad.>");
    type(waitForObject(names.mainWindowStepQLineEdit), "<NumPad0>");
    type(waitForObject(names.mainWindowStepQLineEdit), "<NumPad1>");
    type(waitForObject(names.mainWindowStepQLineEdit), "<Tab>");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<NumPad1>");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<NumPad0>");
    clickButton(waitForObject(names.mainWindowPlotQPushButton));
    test.imagePresent("5^x",{'tolerant': true,'threshold': 98 }, waitForObjectExists(names.mainWindowMainWindow));
    
    mouseClick(waitForObject(names.mainWindowFunctionQLineEdit), 115, 10, Qt.NoModifier, Qt.LeftButton);
    type(waitForObject(names.mainWindowFunctionQLineEdit), "<Ctrl+A>");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "abs(x)");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "<Tab>");
    type(waitForObject(names.mainWindowMinXQLineEdit), "<NumPad->");
    type(waitForObject(names.mainWindowMinXQLineEdit), "<NumPad2>");
    type(waitForObject(names.mainWindowMinXQLineEdit), "<NumPad0>");
    type(waitForObject(names.mainWindowMinXQLineEdit), "<Tab>");
    type(waitForObject(names.mainWindowStepQLineEdit), "<NumPad0>");
    type(waitForObject(names.mainWindowStepQLineEdit), "<Tab>");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<NumPad2>");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<NumPad0>");
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<Tab>");
    type(waitForObject(names.mainWindowPlotQPushButton), " ");
    test.compare(waitForObjectExists(names.errorQMessageBox).text, "Step must be greater than zero");
    clickButton(waitForObject(names.errorOKQPushButton));
    mouseDrag(waitForObject(names.mainWindowStepQLineEdit), 129, 17, -169, 5, 1, Qt.LeftButton);
    type(waitForObject(names.mainWindowStepQLineEdit), "<NumPad0>");
    type(waitForObject(names.mainWindowStepQLineEdit), "<NumPad.>");
    type(waitForObject(names.mainWindowStepQLineEdit), "<NumPad0>");
    type(waitForObject(names.mainWindowStepQLineEdit), "<NumPad5>");
    clickButton(waitForObject(names.mainWindowPlotQPushButton));
    test.imagePresent("abs(x)", {'tolerant': true,'threshold': 98 }, waitForObjectExists(names.mainWindowMainWindow));
    
    mouseClick(waitForObject(names.mainWindowFunctionQLineEdit), 248, 1, Qt.NoModifier, Qt.LeftButton);
    type(waitForObject(names.mainWindowFunctionQLineEdit), "<Shift+Home>");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "-x&");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "<NumPad2>");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "<Backspace>");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "<Backspace>");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "&");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "<Backspace>");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "^2");
    clickButton(waitForObject(names.mainWindowPlotQPushButton));
    test.imagePresent("-x^2", {'tolerant': true,'threshold': 98 }, waitForObjectExists(names.mainWindowMainWindow));
}
