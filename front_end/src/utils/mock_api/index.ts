import { setupWorker, SetupWorkerApi } from "msw";

export const handlers = [];

export const worker: () => SetupWorkerApi = () => setupWorker(...handlers);
