import {workspace, window} from 'vscode';

export function cleanFiles(){
	let config = workspace.getConfiguration('BoringStuff.CleanFiles');

	let includePatterns = config.get<string[]>('include');
	if (includePatterns !== undefined){

		let excludePattern = config.get<string>('exclude');
		if (excludePattern === undefined){
			excludePattern = "null";
		}
		for (let aPattern of includePatterns){
			workspace.findFiles(aPattern, excludePattern)
			.then(filesUri => {
				for (let aFileUri of filesUri){
					workspace.fs.delete(aFileUri);
				}
			});
		};
		// Display a message box to the user
		window.showInformationMessage('Files according ' + includePatterns + ' patterns are deleted.');	
	} else {
		window.showInformationMessage('You have to define BoringStuff.CleanFiles.include in your settings.json.');	
	}
}