import {
    MAIN_TYPE,
    type MainType,
    SUB_TYPE,
    type SubType
} from "./CellType"

// https://www.schemecolor.com/rainbow-child.php
const TypeColors = {
    expanded: {
        color: "#feee5e",
        label: "Expanded",
        type: SUB_TYPE.EXPANDED
    },
    floor: {
        color: "#FFFFFF",
        label: "Floor",
        type: MAIN_TYPE.FLOOR
    },
    goal: {
        color: "#a4cf09",
        label: "Goal",
        type: MAIN_TYPE.GOAL
    },
    path: {
        color: "#7349a2",
        label: "Path",
        type: SUB_TYPE.PATH
    },
    search: {
        color: "#f39b50",
        label: "Search",
        type: SUB_TYPE.SEARCH
    },
    start: {
        color: "#f03e3e",
        label: "Start",
        type: MAIN_TYPE.START
    },
    wall: {
        color: "#000000",
        label: "Wall",
        type: MAIN_TYPE.WALL
    }
} as const

const get_color = (type: number): string =>
    Object.values(TypeColors).find((color) => color.type === type)?.color ?? ""

const get_color_from_types = (main: MainType, sub: SubType): string => {
        if (main === MAIN_TYPE.WALL
            || main === MAIN_TYPE.START
            || main === MAIN_TYPE.GOAL
        ) {
            return get_color(main)
        }
        
        let color = get_color(sub)
        if (color.length === 0) {
            color = get_color(MAIN_TYPE.FLOOR)
        }
        return color
    }

export {
    get_color_from_types,
    TypeColors
}