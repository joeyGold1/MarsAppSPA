import { numPerPage } from "../constants";

export function moveLeftRight(direction: "left"|"right" ,pagination:{start:number,end:number},maxPage:number) {
    const newStart = (direction=="left"?
        Math.max(
            pagination.start - numPerPage,
            0)
        :Math.min(
            pagination.start + numPerPage,
            maxPage-numPerPage)
    );
    const newEnd = newStart + numPerPage;
    return { start: newStart, end: newEnd }
}
