import { PartialStateUpdater } from "@ngrx/signals";
import { AppSlice } from "./app.slice";

export function incX(): PartialStateUpdater<AppSlice> {
    return (state) => (state.x + state.y < 10) 
    ? {x: state.x + 1}
    : state;
}

export function incY(): PartialStateUpdater<AppSlice> {
    return (state) => (state.x + state.y < 10) 
    ? {y: state.y + 1}
    : state;}

export function reset(x: number, y: number): PartialStateUpdater<AppSlice> {
    return (_) => ({
        x,
        y
    })
}