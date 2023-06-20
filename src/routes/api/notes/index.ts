import { APIEvent, json } from "solid-start";

export function GET(e: APIEvent) {
    return json({
        notes: ["note 1", "note 2"]
    });
}