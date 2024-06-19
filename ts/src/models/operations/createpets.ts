/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreatePetsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * unexpected error
     */
    error?: components.ErrorT | undefined;
};

/** @internal */
export namespace CreatePetsResponse$ {
    export const inboundSchema: z.ZodType<CreatePetsResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Error: components.ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                Error: "error",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Error?: components.ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePetsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            error: components.ErrorT$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                error: "Error",
            });
        });
}
