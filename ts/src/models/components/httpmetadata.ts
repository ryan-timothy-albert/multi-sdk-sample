/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type HTTPMetadata = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    response: Response;
    /**
     * Raw HTTP request; suitable for debugging
     */
    request: Request;
};

/** @internal */
export namespace HTTPMetadata$ {
    export const inboundSchema: z.ZodType<HTTPMetadata, z.ZodTypeDef, unknown> = z
        .object({
            Response: z.instanceof(Response),
            Request: z.instanceof(Request),
        })
        .transform((v) => {
            return remap$(v, {
                Response: "response",
                Request: "request",
            });
        });

    export type Outbound = {
        Response: never;
        Request: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HTTPMetadata> = z
        .object({
            response: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            request: z.instanceof(Request).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                response: "Response",
                request: "Request",
            });
        });
}
