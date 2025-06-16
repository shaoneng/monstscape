declare module "macy" {
      interface Options {
        container: Element | string;
        columns: number;
        margin?: number;
        trueOrder?: boolean;
        waitForImages?: boolean;
        breakAt?: Record<number, number>;
      }
      interface Instance {
        recalc(cb?: () => void): void;
        remove(): void;
      }
      function Macy(opts: Options): Instance;
      export = Macy;
    }