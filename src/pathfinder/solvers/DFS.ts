import type Cell from "../classes/Cell"
import CellStore from "../classes/CellStore"
import type Grid from "../classes/Grid"
import type IPosition from "../classes/IPosition"
import Solver from "./Solver"
import { SubType } from "../classes/CellTypes"

/** Implementation of the Depth-first search algorithm
 * 
 * Source: https://en.wikipedia.org/wiki/Depth-first_search
 */
class DFS extends Solver {

    constructor(grid: Grid) {
        // behaves as a stack
        super(grid, new CellStore())
    }

    override perform_step(): void {
        const current_cell = this.get_next_cell(-1)
        if (current_cell !== undefined) {
            this.get_von_neumann_neighbourhood(current_cell).forEach((neighbour) => {
                neighbour.sub_type = SubType.SEARCH
                neighbour.predecessor = current_cell
                this.store.add_unique(neighbour)
                this.updates.add(neighbour)
            })
        }
    }

    override set_start_position(position: IPosition): Cell | undefined {
        const start_cell = super.set_start_position(position)
        if (start_cell !== undefined) {
            this.store.add_unique(start_cell)
        }
        return start_cell
    }

}

export default DFS