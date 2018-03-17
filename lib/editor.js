const editor = {
    getActiveTextEditor() {
        return atom.workspace.getActiveTextEditor();
    },
    
    hasPath(activeTextEditor) {
        return typeof this.getPath(activeTextEditor) !== "undefined";
    },
    
    isDirty(activeTextEditor) {
        return activeTextEditor.isModified() && this.hasPath(activeTextEditor);
    },
    
    getText(activeTextEditor) {
        return activeTextEditor.getText();
    },
    
    getPath(activeTextEditor) {
        return activeTextEditor.getPath();
    },
    
    save(activeTextEditor) {
        activeTextEditor.save();
    }
}

module.exports = editor;