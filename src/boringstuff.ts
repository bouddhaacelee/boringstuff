// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { cleanFiles } from "./cleanFiles";
import { createDirectoryTree } from "./createDirectoryTree";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let cleanFilesDisposable = vscode.commands.registerCommand('boringstuff.cleanfiles', () => {
		// The code you place here will be executed every time your command is executed
		cleanFiles();
	});

	context.subscriptions.push(cleanFilesDisposable);

	let createDirectoryTreeDisposable = vscode.commands.registerCommand('boringstuff.createDirectoryTree', () => {
		// The code you place here will be executed every time your command is executed
		createDirectoryTree();
	});

	context.subscriptions.push(createDirectoryTreeDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
