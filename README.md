# Boring Stuff README

A simple extension in order to automate some boring stuff using the vscode API.

## Features

* Clean files
* Create a directory tree

## Requirements

See package.json

## Extension Settings

This extension contributes the following settings:

* `BoringStuff.CleanFiles.include`: A glob pattern that defines the files to search for. The glob pattern will be matched against the file paths of resulting matches relative to their workspace. Use a relative pattern to restrict the search results to a workspace folder. See VS Code API for more details.
* `BoringStuff.CleanFiles.exclude`: A glob pattern that defines files and folders to exclude. The glob pattern will be matched against the file paths of resulting matches relative to their workspace. When undefined only default excludes will apply, when null no excludes will apply. See VS Code API for more details.
* `BoringStuff.Create.directories`:Create a list of new directories (Note, that new files are created via write-calls). Note that missing directories are created automatically, e.g this call has mkdirp semantics. See VS Code API for more details.

## Known Issues

None

## Release Notes

### 0.1.0

Initial release of this extension

**Enjoy!**
