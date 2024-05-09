import { finalPath } from './pathfinding.js';

import airRoutes from '../data/ui/routes/air.json';
import airStops from '../data/ui/stops/air.json';

import bahnRoutes from '../data/ui/routes/bahn.json';
import bahnStops from '../data/ui/stops/bahn.json';

import busRoutes from '../data/ui/routes/bus.json';
import busStops from '../data/ui/stops/bus.json';

import omegaRoutes from '../data/ui/routes/omega.json';
import omegaStops from '../data/ui/stops/omega.json';

import railRoutes from '../data/ui/routes/rail.json';
import railStops from '../data/ui/stops/rail.json';

import railLumevaRoutes from '../data/ui/routes/railLumeva.json';
import railLumevaStops from '../data/ui/stops/railLumeva.json';

import railScarRoutes from '../data/ui/routes/railScar.json';
import railScarStops from '../data/ui/stops/railScar.json';

import sailRoutes from '../data/ui/routes/sail.json';
import sailStops from '../data/ui/stops/sail.json';

let useAir = true;
let useBahn = true;
let useBus = true;
let useRail = true;
let useRailLocal = true;
let useSail = true;

let allStops = [];
let allRoutes = [];

function addToAllStops(modeStops) {