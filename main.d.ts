declare module "@ngiapak/memory" {
    class Memory {
        constructor(storageDir: string);
        public now(eventName: string, object: any): void;
        public when(eventName: string, object: any): any[];
        public recent(eventName: string, object: any): any;
    }
    namespace Memory {}
    export = Memory;
}
