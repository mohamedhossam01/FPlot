import * as names from 'names.js';

function main() {
    startApplication("FPlot");
    // Pressing plot with no inputs
    sendEvent("QMouseEvent", waitForObject(names.mainWindowPlotQPushButton), QEvent.MouseButtonPress, 237, 6, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(names.mainWindowPlotQPushButton), QEvent.MouseButtonRelease, 237, 6, Qt.LeftButton, 0, 0);
    test.compare(waitForObjectExists(names.errorQtMsgboxLabelQLabel).text, "Please enter data in all fields");
    clickButton(waitForObject(names.errorOKQPushButton));
    
    // Entering Function then pressing Plot
    mouseClick(waitForObject(names.mainWindowFunctionQLineEdit), 223, 16, Qt.NoModifier, Qt.LeftButton);
    type(waitForObject(names.mainWindowFunctionQLineEdit), "<NumPad5>");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "*x^3");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "<NumPad+>");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "<NumPad2>");
    type(waitForObject(names.mainWindowFunctionQLineEdit), "*x");    
    sendEvent("QMouseEvent", waitForObject(names.mainWindowPlotQPushButton), QEvent.MouseButtonPress, 237, 6, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(names.mainWindowPlotQPushButton), QEvent.MouseButtonRelease, 237, 6, Qt.LeftButton, 0, 0);
    test.compare(waitForObjectExists(names.errorQtMsgboxLabelQLabel).text, "Please enter data in all fields");
    clickButton(waitForObject(names.errorOKQPushButton));
    
    // Entering Min X then pressing Plot
    mouseClick(waitForObject(names.mainWindowMinXQLineEdit), 273, 5, Qt.NoModifier, Qt.LeftButton);
    type(waitForObject(names.mainWindowMinXQLineEdit), "<NumPad->");
    type(waitForObject(names.mainWindowMinXQLineEdit), "<NumPad5>");
    sendEvent("QMouseEvent", waitForObject(names.mainWindowPlotQPushButton), QEvent.MouseButtonPress, 237, 6, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(names.mainWindowPlotQPushButton), QEvent.MouseButtonRelease, 237, 6, Qt.LeftButton, 0, 0);
    test.compare(waitForObjectExists(names.errorQtMsgboxLabelQLabel).text, "Please enter data in all fields");
    clickButton(waitForObject(names.errorOKQPushButton));
    
    // Entering Step then pressing Plot
    mouseClick(waitForObject(names.mainWindowStepQLineEdit), 94, 17, Qt.NoModifier, Qt.LeftButton);
    type(waitForObject(names.mainWindowStepQLineEdit), "<NumPad0>");
    type(waitForObject(names.mainWindowStepQLineEdit), "<NumPad.>");
    type(waitForObject(names.mainWindowStepQLineEdit), "<NumPad0>");
    type(waitForObject(names.mainWindowStepQLineEdit), "<NumPad5>");
    sendEvent("QMouseEvent", waitForObject(names.mainWindowPlotQPushButton), QEvent.MouseButtonPress, 237, 6, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(names.mainWindowPlotQPushButton), QEvent.MouseButtonRelease, 237, 6, Qt.LeftButton, 0, 0);
    test.compare(waitForObjectExists(names.errorQtMsgboxLabelQLabel).text, "Please enter data in all fields");
    clickButton(waitForObject(names.errorOKQPushButton));
    
    // Pressing plot without max x
    mouseClick(waitForObject(names.mainWindowMaxXQLineEdit), 88, 13, Qt.NoModifier, Qt.LeftButton);
    type(waitForObject(names.mainWindowMaxXQLineEdit), "<NumPad5>");
    sendEvent("QMouseEvent", waitForObject(names.mainWindowPlotQPushButton), QEvent.MouseButtonPress, 237, 6, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(names.mainWindowPlotQPushButton), QEvent.MouseButtonRelease, 237, 6, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(names.mainWindowPlotQPushButton));
}
