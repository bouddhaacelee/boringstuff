// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		let config = vscode.workspace.getConfiguration('clean-files');
		let includePatterns = config.get<string[]>('include');
		if (includePatterns === undefined){
			includePatterns = ['**/*.h5'];
		}
		for (let aPattern of includePatterns){
			vscode.workspace.findFiles(aPattern)
			.then(filesUri => {
				for (let aFileUri of filesUri){
					console.log(aFileUri);
				}
			});
		};
		// Display a message box to the user
		vscode.window.showInformationMessage('Files are deleted.');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
