import EmptyMaze from "./EmptyMaze"
import Generator from "./Generator"
import Grid from "../classes/Grid"
import GrowingTree from "./GrowingTree"


interface GeneratorInfoType {
    id: number,
    full: string,
    short: string
}

const GeneratorInfo = {
    EmptyMaze: { id: 1, full: "", short: "Empty"},
    GrowingTree: { id: 2, full: "", short: "GrowingTree"},
} as const
const NoGeneratorInfo = { id: -1, full: "Requested generator information not found", short: "Error" }

const create_generator = (id: number, grid: Grid): Generator => {
    if (id === GeneratorInfo.EmptyMaze.id) {
        return new EmptyMaze(grid)
    }
    if (id === GeneratorInfo.GrowingTree.id) {
        return new GrowingTree(grid)
    }
    // return empty generator if nothing found
    return new Generator(new Grid(0, 0))
}

const get_generator_info_by_id = (id: number): GeneratorInfoType =>
    Object.values(GeneratorInfo).find((generator) => generator.id === id) ?? NoGeneratorInfo

export default create_generator
export {
    get_generator_info_by_id,
    GeneratorInfo
}