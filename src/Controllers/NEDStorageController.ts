import { InputFormFields } from "../Components/InputForm";

const DB_KEY = 'com.aidsprogramssouthsask.NED';

export class NEDStorageController {
    private _db: InputFormFields[] = [];

    constructor() {
        this._init(DB_KEY);
    }

    private _init(key: string): void {
        const dbString = localStorage.getItem(key);
        if (dbString) {
            this._db = JSON.parse(dbString);
        } else {
            this._db = [];
        }

        this._saveAllRecords();
        console.log('*** Local database initialized:', this._db);
    }

    public addRecord(payload: InputFormFields): void {
        if (this._db) {

            this._db.push(payload);
            this._saveAllRecords();
            console.log('Record added. DB: ', this._db);
        }
    }

    private _saveAllRecords(): void {
        const dbString = JSON.stringify(this._db);
        localStorage.setItem(DB_KEY, dbString);
        console.log('Saved all records.');
    }

    public getRecordById(id: string): void {}

}
