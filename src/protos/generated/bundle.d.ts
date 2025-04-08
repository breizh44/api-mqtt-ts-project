import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a Header. */
export interface IHeader {

    /** Header timestamp */
    timestamp?: (number|Long|null);

    /** Header version */
    version?: (string|null);
}

/** Represents a Header. */
export class Header implements IHeader {

    /**
     * Constructs a new Header.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHeader);

    /** Header timestamp. */
    public timestamp: (number|Long);

    /** Header version. */
    public version: string;

    /**
     * Creates a new Header instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Header instance
     */
    public static create(properties?: IHeader): Header;

    /**
     * Encodes the specified Header message. Does not implicitly {@link Header.verify|verify} messages.
     * @param message Header message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Header message, length delimited. Does not implicitly {@link Header.verify|verify} messages.
     * @param message Header message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Header message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Header
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Header;

    /**
     * Decodes a Header message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Header
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Header;

    /**
     * Verifies a Header message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Header message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Header
     */
    public static fromObject(object: { [k: string]: any }): Header;

    /**
     * Creates a plain object from a Header message. Also converts values to other types if specified.
     * @param message Header
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Header to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Header
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Consumption. */
export interface IConsumption {

    /** Consumption timestamp */
    timestamp?: (number|Long|null);

    /** Consumption value */
    value?: (number|null);
}

/** Represents a Consumption. */
export class Consumption implements IConsumption {

    /**
     * Constructs a new Consumption.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsumption);

    /** Consumption timestamp. */
    public timestamp: (number|Long);

    /** Consumption value. */
    public value: number;

    /**
     * Creates a new Consumption instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Consumption instance
     */
    public static create(properties?: IConsumption): Consumption;

    /**
     * Encodes the specified Consumption message. Does not implicitly {@link Consumption.verify|verify} messages.
     * @param message Consumption message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsumption, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Consumption message, length delimited. Does not implicitly {@link Consumption.verify|verify} messages.
     * @param message Consumption message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsumption, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Consumption message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Consumption
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Consumption;

    /**
     * Decodes a Consumption message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Consumption
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Consumption;

    /**
     * Verifies a Consumption message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Consumption message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Consumption
     */
    public static fromObject(object: { [k: string]: any }): Consumption;

    /**
     * Creates a plain object from a Consumption message. Also converts values to other types if specified.
     * @param message Consumption
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Consumption, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Consumption to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Consumption
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LoadProgReq. */
export interface ILoadProgReq {

    /** LoadProgReq timestamp */
    timestamp?: (number|Long|null);

    /** LoadProgReq progId */
    progId?: (number|null);

    /** LoadProgReq hash */
    hash?: (string|null);
}

/** Represents a LoadProgReq. */
export class LoadProgReq implements ILoadProgReq {

    /**
     * Constructs a new LoadProgReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoadProgReq);

    /** LoadProgReq timestamp. */
    public timestamp: (number|Long);

    /** LoadProgReq progId. */
    public progId: number;

    /** LoadProgReq hash. */
    public hash: string;

    /**
     * Creates a new LoadProgReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoadProgReq instance
     */
    public static create(properties?: ILoadProgReq): LoadProgReq;

    /**
     * Encodes the specified LoadProgReq message. Does not implicitly {@link LoadProgReq.verify|verify} messages.
     * @param message LoadProgReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoadProgReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoadProgReq message, length delimited. Does not implicitly {@link LoadProgReq.verify|verify} messages.
     * @param message LoadProgReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoadProgReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoadProgReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoadProgReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoadProgReq;

    /**
     * Decodes a LoadProgReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoadProgReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoadProgReq;

    /**
     * Verifies a LoadProgReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoadProgReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoadProgReq
     */
    public static fromObject(object: { [k: string]: any }): LoadProgReq;

    /**
     * Creates a plain object from a LoadProgReq message. Also converts values to other types if specified.
     * @param message LoadProgReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoadProgReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoadProgReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LoadProgReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Measure. */
export interface IMeasure {

    /** Measure header */
    header?: (IHeader|null);

    /** Measure value */
    value?: (number|null);

    /** Measure pulsed */
    pulsed?: (Measure.Pulsed|null);

    /** Measure measureSpeed */
    measureSpeed?: (Measure.IMeasureSpeed|null);

    /** Measure measureCurrent */
    measureCurrent?: (Measure.IMeasureCurrent|null);

    /** Measure measureVoltage */
    measureVoltage?: (Measure.IMeasureVoltage|null);
}

/** Represents a Measure. */
export class Measure implements IMeasure {

    /**
     * Constructs a new Measure.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMeasure);

    /** Measure header. */
    public header?: (IHeader|null);

    /** Measure value. */
    public value: number;

    /** Measure pulsed. */
    public pulsed: Measure.Pulsed;

    /** Measure measureSpeed. */
    public measureSpeed?: (Measure.IMeasureSpeed|null);

    /** Measure measureCurrent. */
    public measureCurrent?: (Measure.IMeasureCurrent|null);

    /** Measure measureVoltage. */
    public measureVoltage?: (Measure.IMeasureVoltage|null);

    /** Measure type. */
    public type?: ("measureSpeed"|"measureCurrent"|"measureVoltage");

    /**
     * Creates a new Measure instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Measure instance
     */
    public static create(properties?: IMeasure): Measure;

    /**
     * Encodes the specified Measure message. Does not implicitly {@link Measure.verify|verify} messages.
     * @param message Measure message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMeasure, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Measure message, length delimited. Does not implicitly {@link Measure.verify|verify} messages.
     * @param message Measure message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMeasure, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Measure message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Measure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Measure;

    /**
     * Decodes a Measure message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Measure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Measure;

    /**
     * Verifies a Measure message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Measure message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Measure
     */
    public static fromObject(object: { [k: string]: any }): Measure;

    /**
     * Creates a plain object from a Measure message. Also converts values to other types if specified.
     * @param message Measure
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Measure, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Measure to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Measure
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace Measure {

    /** Pulsed enum. */
    enum Pulsed {
        CONTINUOUS = 0,
        PULSED_HIGH = 1,
        PULSED_LOW = 2
    }

    /** Properties of a MeasureSpeed. */
    interface IMeasureSpeed {
    }

    /** Represents a MeasureSpeed. */
    class MeasureSpeed implements IMeasureSpeed {

        /**
         * Constructs a new MeasureSpeed.
         * @param [properties] Properties to set
         */
        constructor(properties?: Measure.IMeasureSpeed);

        /**
         * Creates a new MeasureSpeed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MeasureSpeed instance
         */
        public static create(properties?: Measure.IMeasureSpeed): Measure.MeasureSpeed;

        /**
         * Encodes the specified MeasureSpeed message. Does not implicitly {@link Measure.MeasureSpeed.verify|verify} messages.
         * @param message MeasureSpeed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Measure.IMeasureSpeed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MeasureSpeed message, length delimited. Does not implicitly {@link Measure.MeasureSpeed.verify|verify} messages.
         * @param message MeasureSpeed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Measure.IMeasureSpeed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MeasureSpeed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MeasureSpeed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Measure.MeasureSpeed;

        /**
         * Decodes a MeasureSpeed message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MeasureSpeed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Measure.MeasureSpeed;

        /**
         * Verifies a MeasureSpeed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MeasureSpeed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MeasureSpeed
         */
        public static fromObject(object: { [k: string]: any }): Measure.MeasureSpeed;

        /**
         * Creates a plain object from a MeasureSpeed message. Also converts values to other types if specified.
         * @param message MeasureSpeed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Measure.MeasureSpeed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MeasureSpeed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MeasureSpeed
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MeasureCurrent. */
    interface IMeasureCurrent {
    }

    /** Represents a MeasureCurrent. */
    class MeasureCurrent implements IMeasureCurrent {

        /**
         * Constructs a new MeasureCurrent.
         * @param [properties] Properties to set
         */
        constructor(properties?: Measure.IMeasureCurrent);

        /**
         * Creates a new MeasureCurrent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MeasureCurrent instance
         */
        public static create(properties?: Measure.IMeasureCurrent): Measure.MeasureCurrent;

        /**
         * Encodes the specified MeasureCurrent message. Does not implicitly {@link Measure.MeasureCurrent.verify|verify} messages.
         * @param message MeasureCurrent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Measure.IMeasureCurrent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MeasureCurrent message, length delimited. Does not implicitly {@link Measure.MeasureCurrent.verify|verify} messages.
         * @param message MeasureCurrent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Measure.IMeasureCurrent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MeasureCurrent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MeasureCurrent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Measure.MeasureCurrent;

        /**
         * Decodes a MeasureCurrent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MeasureCurrent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Measure.MeasureCurrent;

        /**
         * Verifies a MeasureCurrent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MeasureCurrent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MeasureCurrent
         */
        public static fromObject(object: { [k: string]: any }): Measure.MeasureCurrent;

        /**
         * Creates a plain object from a MeasureCurrent message. Also converts values to other types if specified.
         * @param message MeasureCurrent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Measure.MeasureCurrent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MeasureCurrent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MeasureCurrent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MeasureVoltage. */
    interface IMeasureVoltage {
    }

    /** Represents a MeasureVoltage. */
    class MeasureVoltage implements IMeasureVoltage {

        /**
         * Constructs a new MeasureVoltage.
         * @param [properties] Properties to set
         */
        constructor(properties?: Measure.IMeasureVoltage);

        /**
         * Creates a new MeasureVoltage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MeasureVoltage instance
         */
        public static create(properties?: Measure.IMeasureVoltage): Measure.MeasureVoltage;

        /**
         * Encodes the specified MeasureVoltage message. Does not implicitly {@link Measure.MeasureVoltage.verify|verify} messages.
         * @param message MeasureVoltage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Measure.IMeasureVoltage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MeasureVoltage message, length delimited. Does not implicitly {@link Measure.MeasureVoltage.verify|verify} messages.
         * @param message MeasureVoltage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Measure.IMeasureVoltage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MeasureVoltage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MeasureVoltage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Measure.MeasureVoltage;

        /**
         * Decodes a MeasureVoltage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MeasureVoltage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Measure.MeasureVoltage;

        /**
         * Verifies a MeasureVoltage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MeasureVoltage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MeasureVoltage
         */
        public static fromObject(object: { [k: string]: any }): Measure.MeasureVoltage;

        /**
         * Creates a plain object from a MeasureVoltage message. Also converts values to other types if specified.
         * @param message MeasureVoltage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Measure.MeasureVoltage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MeasureVoltage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MeasureVoltage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a RequestResponse. */
export interface IRequestResponse {

    /** RequestResponse status */
    status?: (string|null);

    /** RequestResponse message */
    message?: (string|null);
}

/** Represents a RequestResponse. */
export class RequestResponse implements IRequestResponse {

    /**
     * Constructs a new RequestResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequestResponse);

    /** RequestResponse status. */
    public status: string;

    /** RequestResponse message. */
    public message: string;

    /**
     * Creates a new RequestResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestResponse instance
     */
    public static create(properties?: IRequestResponse): RequestResponse;

    /**
     * Encodes the specified RequestResponse message. Does not implicitly {@link RequestResponse.verify|verify} messages.
     * @param message RequestResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequestResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestResponse message, length delimited. Does not implicitly {@link RequestResponse.verify|verify} messages.
     * @param message RequestResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequestResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RequestResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestResponse;

    /**
     * Decodes a RequestResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RequestResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestResponse;

    /**
     * Verifies a RequestResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RequestResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RequestResponse
     */
    public static fromObject(object: { [k: string]: any }): RequestResponse;

    /**
     * Creates a plain object from a RequestResponse message. Also converts values to other types if specified.
     * @param message RequestResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RequestResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RequestResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
