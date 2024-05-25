function colors(colorStyles, colorObj, mode, type) {
    if (mode === 'bahn') {
        if (type === 'origin') {
            colorObj.containerColor = colorStyles.grayBackground;
            colorObj.mainColor = colorStyles.grayColor;
        }
        if (type === 'mainline') {
            colorObj.containerColor = colorStyles.bahnMainlineBackground;
            colorObj.mainColor = colorStyles.bahnMainlineColor;
            colorObj.filterColor = colorStyles.bahnMainlineFilter;
        }
        if (type === 'express') {
            colorObj.containerColor = colorStyles.bahnExpressBackground;
            colorObj.mainColor = colorStyles.bahnExpressColor;
            colorObj.filterColor = colorStyles.bahnExpressFilter;
        }
        if (type === 'branch') {
            colorObj.containerColor = colorStyles.bahnBranchBackground;
            colorObj.mainColor = colorStyles.bahnBranchColor;
            colorObj.filterColor = colorStyles.bahnBranchFilter;
        }
        if (type === 'shuttle') {
            colorObj.containerColor = colorStyles.bahnShuttleBackground;
            colorObj.mainColor = colorStyles.bahnShuttleColor;
            colorObj.filterColor = colorStyles.bahnShuttleFilter;
        }
    }
    if (mode === 'air') {
        if (['origin', 'mainline', 'heli', 'poseidon'].includes(type)) {
            colorObj.containerColor = colorStyles.grayBackground;
            colorObj.mainColor = colorStyles.grayColor;
        }
        if (['segville', 'segHeli'].includes(type)) {
            colorObj.containerColor = colorStyles.airSegvilleBackground;
            colorObj.mainColor = colorStyles.airSegvilleColor;
            colorObj.filterColor = colorStyles.airSegvilleFilter;
        }
        if (['waypoint', 'waypointHopper'].includes(type)) {
            colorObj.containerColor = colorStyles.airWaypointBackground;
            colorObj.mainColor = colorStyles.airWaypointColor;
            colorObj.filterColor = colorStyles.airWaypointFilter;
        }
        if (type === 'volanti') {
            colorObj.containerColor = colorStyles.airVolantiBackground;
            colorObj.mainColor = colorStyles.airVolantiColor;
            colorObj.filterColor = colorStyles.airVolantiFilter;
        }
        if (type === 'gemsEmerald') {
            colorObj.containerColor = colorStyles.airGemsEmeraldBackground;
            colorObj.mainColor = colorStyles.airGemsEmeraldColor;
            colorObj.filterColor = colorStyles.airGemsEmeraldFilter;
        }
        if (type === 'gemsGold') {
            colorObj.containerColor = colorStyles.airGemsGoldBackground;
            colorObj.mainColor = colorStyles.blackColor;
            colorObj.filterColor = colorStyles.airGemsGoldFilter;
            colorObj.textColor = colorStyles.blackColor;
        }
        if (type === 'gemsDiamond') {
            colorObj.containerColor = colorStyles.airGemsDiamondBackground;
            colorObj.mainColor = colorStyles.airGemsDiamondColor;
            colorObj.filterColor = colorStyles.airGemsDiamondFilter;
        }
        if (type === 'gemsLapis') {
            colorObj.containerColor = colorStyles.airGemsLapisBackground;
            colorObj.mainColor = colorStyles.airGemsLapisColor;
            colorObj.filterColor = colorStyles.airGemsLapisFilter;
        }
        if (type === 'skywest') {
            colorObj.containerColor = colorStyles.airSkywestBackground;
            colorObj.mainColor = colorStyles.airSkywestColor;
            colorObj.filterColor = colorStyles.airSkywestFilter;
        }
        if (type === 'heampstead') {
            colorObj.containerColor = colorStyles.airHeampsteadBackground;
            colorObj.mainColor = colorStyles.airHeampsteadColor;
            colorObj.filterColor = colorStyles.airHeampsteadFilter;
        }
        if (type === 'eastern') {
            colorObj.containerColor = colorStyles.airEasternBackground;
            colorObj.mainColor = colorStyles.airEasternColor;
            colorObj.filterColor = colorStyles.airEasternFilter;
        }
    }
    if (mode === 'rail') {
        if (type === 'origin') {
            colorObj.containerColor = colorStyles.grayBackground;
            colorObj.mainColor = colorStyles.grayColor;
        }
        if (type === 'black') {
            colorObj.containerColor = colorStyles.blackBackground;
            colorObj.mainColor = colorStyles.blackColor;
        }
        if (type === 'pink') {
            colorObj.containerColor = colorStyles.railPinkBackground;
            colorObj.mainColor = colorStyles.railPinkColor;
            colorObj.filterColor = colorStyles.railPinkFilter;
        }
        if (type === 'cyan') {
            colorObj.containerColor = colorStyles.railCyanBackground;
            colorObj.mainColor = colorStyles.railCyanColor;
            colorObj.filterColor = colorStyles.railCyanFilter;
        }
        if (type === 'blue') {
            colorObj.containerColor = colorStyles.railBlueBackground;
            colorObj.mainColor = colorStyles.railBlueColor;
            colorObj.filterColor = colorStyles.railBlueFilter;
        }
        if (type === 'yellow') {
            colorObj.containerColor = colorStyles.railYellowBackground;
            colorObj.mainColor = colorStyles.blackColor;
            colorObj.filterColor = colorStyles.railYellowFilter;
            colorObj.textColor = colorStyles.blackColor;
        }
        if (type === 'lime') {
            colorObj.containerColor = colorStyles.railLimeBackground;
            colorObj.mainColor = colorStyles.railLimeColor;
            colorObj.filterColor = colorStyles.railLimeFilter;
        }
        if (type === 'orange') {
            colorObj.containerColor = colorStyles.railOrangeBackground;
            colorObj.mainColor = colorStyles.railOrangeColor;
            colorObj.filterColor = colorStyles.railOrangeFilter;
        }
        if (type === 'darkRed') {
            colorObj.containerColor = colorStyles.railDarkRedBackground;
            colorObj.mainColor = colorStyles.railDarkRedColor;
            colorObj.filterColor = colorStyles.railDarkRedFilter;
        }
        if (type === 'tan') {
            colorObj.containerColor = colorStyles.railTanBackground;
            colorObj.mainColor = colorStyles.railTanColor;
            colorObj.filterColor = colorStyles.railTanFilter;
        }
        if (type === 'purple') {
            colorObj.containerColor = colorStyles.railPurpleBackground;
            colorObj.mainColor = colorStyles.railPurpleColor;
            colorObj.filterColor = colorStyles.railPurpleFilter;
        }
        if (type === 'red') {
            colorObj.containerColor = colorStyles.railRedBackground;
            colorObj.mainColor = colorStyles.railRedColor;
            colorObj.filterColor = colorStyles.railRedFilter;
        }
        if (type === 'brown') {
            colorObj.containerColor = colorStyles.railBrownBackground;
            colorObj.mainColor = colorStyles.railBrownColor;
            colorObj.filterColor = colorStyles.railBrownFilter;
        }
        if (type === 'mcr') {
            colorObj.containerColor = colorStyles.railMCRBackground;
            colorObj.mainColor = colorStyles.railMCRColor;
            colorObj.filterColor = colorStyles.railMCRFilter;
        }
    }
    if (mode === 'bus') {
        colorObj.containerColor = colorStyles.grayBackground;
        colorObj.mainColor = colorStyles.grayColor;
    }
    if (mode === 'omega') {
        if (type === 'origin') {
            colorObj.containerColor = colorStyles.grayBackground;
            colorObj.mainColor = colorStyles.grayColor;
        } else {
            colorObj.containerColor = colorStyles.busOmegaBackground;
            colorObj.mainColor = colorStyles.busOmegaColor;
            colorObj.filterColor = colorStyles.busOmegaFilter;
        }
    }
    if (mode === 'sail') {
        if (type === 'origin') {
            colorObj.containerColor = colorStyles.grayBackground;
            colorObj.mainColor = colorStyles.grayColor;
        }
        if (type === 'mainline') {
            colorObj.containerColor = colorStyles.sailMainlineBackground;
            colorObj.mainColor = colorStyles.sailMainlineColor;
            colorObj.filterColor = colorStyles.sailMainlineFilter;
        }
        if (type === 'express') {
            colorObj.containerColor = colorStyles.sailExpressBackground;
            colorObj.mainColor = colorStyles.sailExpressColor;
            colorObj.filterColor = colorStyles.sailExpressFilter;
        }
        if (type === 'branch') {
            colorObj.containerColor = colorStyles.sailBranchBackground;
            colorObj.mainColor = colorStyles.sailBranchColor;
            colorObj.filterColor = colorStyles.sailBranchFilter;
        }
    }
    if (['railScar', 'railLumeva'].includes(mode)) {
        if (type === 'origin') {
            colorObj.containerColor = colorStyles.grayBackground;
            colorObj.mainColor = colorStyles.grayColor;
        } else {
            colorObj.containerColor = colorStyles.railLocalBackground;
            colorObj.mainColor = colorStyles.railLocalColor;
            colorObj.filterColor = colorStyles.railLocalFilter;
        }
    }
    if (mode === 'mrtYellowLine') {
        colorObj.containerColor = colorStyles.yellowBackground;
        colorObj.mainColor = colorStyles.yellowColor;
        colorObj.filterColor = colorStyles.yellowFilter;
        colorObj.textColor = colorStyles.blackColor;
    }
}

export default colors;