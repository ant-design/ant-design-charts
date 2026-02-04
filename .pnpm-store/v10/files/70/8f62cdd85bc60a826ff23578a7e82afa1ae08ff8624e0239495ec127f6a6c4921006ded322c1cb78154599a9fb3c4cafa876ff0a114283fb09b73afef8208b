
const nodesPropertiesEqual = (nodeA, nodeB, key) => {
	if (nodeA.type === 'TemplateElement' && key === 'value') {
		return nodeA.value.raw === nodeB.value.raw;
	}

	return nodeA[key] === nodeB[key];
};

module.exports = {
	nodesPropertiesEqual,
};
