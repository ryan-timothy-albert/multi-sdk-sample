/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Pet = {
    id: number;
    name: string;
    tag?: string | undefined;
};

/** @internal */
export namespace Pet$ {
    export const inboundSchema: z.ZodType<Pet, z.ZodTypeDef, unknown> = z.object({
        id: z.number().int(),
        name: z.string(),
        tag: z.string().optional(),
    });

    export type Outbound = {
        id: number;
        name: string;
        tag?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Pet> = z.object({
        id: z.number().int(),
        name: z.string(),
        tag: z.string().optional(),
    });
}
