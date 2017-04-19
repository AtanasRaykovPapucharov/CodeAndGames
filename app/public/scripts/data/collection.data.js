const collectionData = (requester) => {
	class CollectionData {
		get collectionrDataTest() {
			return true;
		}

	}

	let newData = new CollectionData(requester);
	return newData
}

export { collectionData }