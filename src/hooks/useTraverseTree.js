function useTraverseTree() {
    function insertNode(tree, folderId, item, isFolder) {
        if(tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder,
                items: []
            })

            return tree;
        }

        tree.items = tree.items.map((adjNode) => insertNode(adjNode, folderId, item, isFolder));
        return tree;
    }

    function renameNode(tree, folderId, newName) {
        if(tree.id === folderId) {
            tree.name = newName;

            return tree;
        }

        tree.items = tree.items.map((adjNode) => renameNode(adjNode, folderId, newName));
        return tree;
    }

    return { insertNode, renameNode }
}

export default useTraverseTree;