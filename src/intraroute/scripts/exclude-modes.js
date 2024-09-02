function excludeModes(filters) {
    let excludeModesList = [];
    if (!filters.useAir) {
        excludeModesList.push('air');
    }
    if (!filters.useBahn) {
        excludeModesList.push('bahn');
    }
    if (!filters.useBus) {
        excludeModesList.push('bus');
    }
    if (!filters.useRail) {
        excludeModesList.push('rail');
    }
    if (!filters.useRailLocal) {
        excludeModesList.push('local');
    }
    if (!filters.useSail) {
        excludeModesList.push('sail');
    }
    return excludeModesList;
}

export default excludeModes;