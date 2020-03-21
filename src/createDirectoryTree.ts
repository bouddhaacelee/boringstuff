import {workspace, window, Uri} from 'vscode';

export function createDirectoryTree(){
	let config = workspace.getConfiguration('BoringStuff.Create');

	let directories = config.get<string[]>('directories');
	window.showInputBox({prompt: 'Enter a root directory name:'})
	.then(rootName => {
		if (directories !== undefined){
			let workspaceFolder = workspace.rootPath;
			if (workspaceFolder !== undefined){
				for (let aDirectory of directories){
					let uri = Uri.parse(workspaceFolder + '/' + rootName + '/' + aDirectory);
					workspace.fs.createDirectory(uri);
				}
				window.showInformationMessage('Directory Tree created');
			} else {
				window.showErrorMessage('You have to open a workspace!');
			}
		} else {
			window.showInformationMessage('You have to define BoringStuff.Create.directories in your settgins.json');
		}
	});
}