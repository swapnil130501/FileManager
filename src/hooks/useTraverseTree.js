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

        let node = []
        node = tree.items.map((it) => {
            return insertNode(it, folderId, item, isFolder);
        });

        return {...tree, items: node};
    }

    return { insertNode }
}

export default useTraverseTree;