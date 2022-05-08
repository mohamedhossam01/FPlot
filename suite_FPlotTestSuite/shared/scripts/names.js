import { RegularExpression, Wildcard } from 'objectmaphelper.js';

export var mainWindowMainWindow = {"name": "MainWindow", "type": "MainWindow", "visible": 1};
export var mainWindowFunctionQLineEdit = {"name": "function", "type": "QLineEdit", "visible": 1, "window": mainWindowMainWindow};
export var mainWindowMinXQLineEdit = {"name": "minX", "type": "QLineEdit", "visible": 1, "window": mainWindowMainWindow};
export var mainWindowStepQLineEdit = {"name": "step", "type": "QLineEdit", "visible": 1, "window": mainWindowMainWindow};
export var mainWindowMaxXQLineEdit = {"name": "maxX", "type": "QLineEdit", "visible": 1, "window": mainWindowMainWindow};
export var mainWindowPlotQPushButton = {"name": "plot", "type": "QPushButton", "visible": 1, "window": mainWindowMainWindow};
export var errorQMessageBox = {"type": "QMessageBox", "unnamed": 1, "visible": 1, "windowTitle": "Error"};
export var errorQtMsgboxLabelQLabel = {"name": "qt_msgbox_label", "type": "QLabel", "visible": 1, "window": errorQMessageBox};
export var errorOKQPushButton = {"text": "OK", "type": "QPushButton", "unnamed": 1, "visible": 1, "window": errorQMessageBox};
