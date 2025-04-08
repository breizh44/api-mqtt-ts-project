/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Header = (function() {

    /**
     * Properties of a Header.
     * @exports IHeader
     * @interface IHeader
     * @property {number|Long|null} [timestamp] Header timestamp
     * @property {string|null} [version] Header version
     */

    /**
     * Constructs a new Header.
     * @exports Header
     * @classdesc Represents a Header.
     * @implements IHeader
     * @constructor
     * @param {IHeader=} [properties] Properties to set
     */
    function Header(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Header timestamp.
     * @member {number|Long} timestamp
     * @memberof Header
     * @instance
     */
    Header.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Header version.
     * @member {string} version
     * @memberof Header
     * @instance
     */
    Header.prototype.version = "";

    /**
     * Creates a new Header instance using the specified properties.
     * @function create
     * @memberof Header
     * @static
     * @param {IHeader=} [properties] Properties to set
     * @returns {Header} Header instance
     */
    Header.create = function create(properties) {
        return new Header(properties);
    };

    /**
     * Encodes the specified Header message. Does not implicitly {@link Header.verify|verify} messages.
     * @function encode
     * @memberof Header
     * @static
     * @param {IHeader} message Header message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Header.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
        return writer;
    };

    /**
     * Encodes the specified Header message, length delimited. Does not implicitly {@link Header.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Header
     * @static
     * @param {IHeader} message Header message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Header.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Header message from the specified reader or buffer.
     * @function decode
     * @memberof Header
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Header} Header
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Header.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Header();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.timestamp = reader.uint64();
                    break;
                }
            case 2: {
                    message.version = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Header message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Header
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Header} Header
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Header.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Header message.
     * @function verify
     * @memberof Header
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Header.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isString(message.version))
                return "version: string expected";
        return null;
    };

    /**
     * Creates a Header message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Header
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Header} Header
     */
    Header.fromObject = function fromObject(object) {
        if (object instanceof $root.Header)
            return object;
        var message = new $root.Header();
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
        if (object.version != null)
            message.version = String(object.version);
        return message;
    };

    /**
     * Creates a plain object from a Header message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Header
     * @static
     * @param {Header} message Header
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Header.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
            object.version = "";
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        return object;
    };

    /**
     * Converts this Header to JSON.
     * @function toJSON
     * @memberof Header
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Header.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Header
     * @function getTypeUrl
     * @memberof Header
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Header.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Header";
    };

    return Header;
})();

$root.Consumption = (function() {

    /**
     * Properties of a Consumption.
     * @exports IConsumption
     * @interface IConsumption
     * @property {number|Long|null} [timestamp] Consumption timestamp
     * @property {number|null} [value] Consumption value
     */

    /**
     * Constructs a new Consumption.
     * @exports Consumption
     * @classdesc Represents a Consumption.
     * @implements IConsumption
     * @constructor
     * @param {IConsumption=} [properties] Properties to set
     */
    function Consumption(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Consumption timestamp.
     * @member {number|Long} timestamp
     * @memberof Consumption
     * @instance
     */
    Consumption.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Consumption value.
     * @member {number} value
     * @memberof Consumption
     * @instance
     */
    Consumption.prototype.value = 0;

    /**
     * Creates a new Consumption instance using the specified properties.
     * @function create
     * @memberof Consumption
     * @static
     * @param {IConsumption=} [properties] Properties to set
     * @returns {Consumption} Consumption instance
     */
    Consumption.create = function create(properties) {
        return new Consumption(properties);
    };

    /**
     * Encodes the specified Consumption message. Does not implicitly {@link Consumption.verify|verify} messages.
     * @function encode
     * @memberof Consumption
     * @static
     * @param {IConsumption} message Consumption message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Consumption.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.value);
        return writer;
    };

    /**
     * Encodes the specified Consumption message, length delimited. Does not implicitly {@link Consumption.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Consumption
     * @static
     * @param {IConsumption} message Consumption message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Consumption.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Consumption message from the specified reader or buffer.
     * @function decode
     * @memberof Consumption
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Consumption} Consumption
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Consumption.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Consumption();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.timestamp = reader.uint64();
                    break;
                }
            case 2: {
                    message.value = reader.double();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Consumption message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Consumption
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Consumption} Consumption
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Consumption.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Consumption message.
     * @function verify
     * @memberof Consumption
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Consumption.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (typeof message.value !== "number")
                return "value: number expected";
        return null;
    };

    /**
     * Creates a Consumption message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Consumption
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Consumption} Consumption
     */
    Consumption.fromObject = function fromObject(object) {
        if (object instanceof $root.Consumption)
            return object;
        var message = new $root.Consumption();
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
        if (object.value != null)
            message.value = Number(object.value);
        return message;
    };

    /**
     * Creates a plain object from a Consumption message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Consumption
     * @static
     * @param {Consumption} message Consumption
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Consumption.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
            object.value = 0;
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
        return object;
    };

    /**
     * Converts this Consumption to JSON.
     * @function toJSON
     * @memberof Consumption
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Consumption.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Consumption
     * @function getTypeUrl
     * @memberof Consumption
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Consumption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Consumption";
    };

    return Consumption;
})();

$root.LoadProgReq = (function() {

    /**
     * Properties of a LoadProgReq.
     * @exports ILoadProgReq
     * @interface ILoadProgReq
     * @property {number|Long|null} [timestamp] LoadProgReq timestamp
     * @property {number|null} [progId] LoadProgReq progId
     * @property {string|null} [hash] LoadProgReq hash
     */

    /**
     * Constructs a new LoadProgReq.
     * @exports LoadProgReq
     * @classdesc Represents a LoadProgReq.
     * @implements ILoadProgReq
     * @constructor
     * @param {ILoadProgReq=} [properties] Properties to set
     */
    function LoadProgReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LoadProgReq timestamp.
     * @member {number|Long} timestamp
     * @memberof LoadProgReq
     * @instance
     */
    LoadProgReq.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * LoadProgReq progId.
     * @member {number} progId
     * @memberof LoadProgReq
     * @instance
     */
    LoadProgReq.prototype.progId = 0;

    /**
     * LoadProgReq hash.
     * @member {string} hash
     * @memberof LoadProgReq
     * @instance
     */
    LoadProgReq.prototype.hash = "";

    /**
     * Creates a new LoadProgReq instance using the specified properties.
     * @function create
     * @memberof LoadProgReq
     * @static
     * @param {ILoadProgReq=} [properties] Properties to set
     * @returns {LoadProgReq} LoadProgReq instance
     */
    LoadProgReq.create = function create(properties) {
        return new LoadProgReq(properties);
    };

    /**
     * Encodes the specified LoadProgReq message. Does not implicitly {@link LoadProgReq.verify|verify} messages.
     * @function encode
     * @memberof LoadProgReq
     * @static
     * @param {ILoadProgReq} message LoadProgReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoadProgReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
        if (message.progId != null && Object.hasOwnProperty.call(message, "progId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.progId);
        if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.hash);
        return writer;
    };

    /**
     * Encodes the specified LoadProgReq message, length delimited. Does not implicitly {@link LoadProgReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoadProgReq
     * @static
     * @param {ILoadProgReq} message LoadProgReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoadProgReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoadProgReq message from the specified reader or buffer.
     * @function decode
     * @memberof LoadProgReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoadProgReq} LoadProgReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoadProgReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoadProgReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.timestamp = reader.uint64();
                    break;
                }
            case 2: {
                    message.progId = reader.uint32();
                    break;
                }
            case 3: {
                    message.hash = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LoadProgReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LoadProgReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoadProgReq} LoadProgReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoadProgReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LoadProgReq message.
     * @function verify
     * @memberof LoadProgReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LoadProgReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        if (message.progId != null && message.hasOwnProperty("progId"))
            if (!$util.isInteger(message.progId))
                return "progId: integer expected";
        if (message.hash != null && message.hasOwnProperty("hash"))
            if (!$util.isString(message.hash))
                return "hash: string expected";
        return null;
    };

    /**
     * Creates a LoadProgReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LoadProgReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoadProgReq} LoadProgReq
     */
    LoadProgReq.fromObject = function fromObject(object) {
        if (object instanceof $root.LoadProgReq)
            return object;
        var message = new $root.LoadProgReq();
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
        if (object.progId != null)
            message.progId = object.progId >>> 0;
        if (object.hash != null)
            message.hash = String(object.hash);
        return message;
    };

    /**
     * Creates a plain object from a LoadProgReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoadProgReq
     * @static
     * @param {LoadProgReq} message LoadProgReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LoadProgReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
            object.progId = 0;
            object.hash = "";
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
        if (message.progId != null && message.hasOwnProperty("progId"))
            object.progId = message.progId;
        if (message.hash != null && message.hasOwnProperty("hash"))
            object.hash = message.hash;
        return object;
    };

    /**
     * Converts this LoadProgReq to JSON.
     * @function toJSON
     * @memberof LoadProgReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoadProgReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LoadProgReq
     * @function getTypeUrl
     * @memberof LoadProgReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LoadProgReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LoadProgReq";
    };

    return LoadProgReq;
})();

$root.Measure = (function() {

    /**
     * Properties of a Measure.
     * @exports IMeasure
     * @interface IMeasure
     * @property {IHeader|null} [header] Measure header
     * @property {number|null} [value] Measure value
     * @property {Measure.Pulsed|null} [pulsed] Measure pulsed
     * @property {Measure.IMeasureSpeed|null} [measureSpeed] Measure measureSpeed
     * @property {Measure.IMeasureCurrent|null} [measureCurrent] Measure measureCurrent
     * @property {Measure.IMeasureVoltage|null} [measureVoltage] Measure measureVoltage
     */

    /**
     * Constructs a new Measure.
     * @exports Measure
     * @classdesc Represents a Measure.
     * @implements IMeasure
     * @constructor
     * @param {IMeasure=} [properties] Properties to set
     */
    function Measure(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Measure header.
     * @member {IHeader|null|undefined} header
     * @memberof Measure
     * @instance
     */
    Measure.prototype.header = null;

    /**
     * Measure value.
     * @member {number} value
     * @memberof Measure
     * @instance
     */
    Measure.prototype.value = 0;

    /**
     * Measure pulsed.
     * @member {Measure.Pulsed} pulsed
     * @memberof Measure
     * @instance
     */
    Measure.prototype.pulsed = 0;

    /**
     * Measure measureSpeed.
     * @member {Measure.IMeasureSpeed|null|undefined} measureSpeed
     * @memberof Measure
     * @instance
     */
    Measure.prototype.measureSpeed = null;

    /**
     * Measure measureCurrent.
     * @member {Measure.IMeasureCurrent|null|undefined} measureCurrent
     * @memberof Measure
     * @instance
     */
    Measure.prototype.measureCurrent = null;

    /**
     * Measure measureVoltage.
     * @member {Measure.IMeasureVoltage|null|undefined} measureVoltage
     * @memberof Measure
     * @instance
     */
    Measure.prototype.measureVoltage = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Measure type.
     * @member {"measureSpeed"|"measureCurrent"|"measureVoltage"|undefined} type
     * @memberof Measure
     * @instance
     */
    Object.defineProperty(Measure.prototype, "type", {
        get: $util.oneOfGetter($oneOfFields = ["measureSpeed", "measureCurrent", "measureVoltage"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Measure instance using the specified properties.
     * @function create
     * @memberof Measure
     * @static
     * @param {IMeasure=} [properties] Properties to set
     * @returns {Measure} Measure instance
     */
    Measure.create = function create(properties) {
        return new Measure(properties);
    };

    /**
     * Encodes the specified Measure message. Does not implicitly {@link Measure.verify|verify} messages.
     * @function encode
     * @memberof Measure
     * @static
     * @param {IMeasure} message Measure message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Measure.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.header != null && Object.hasOwnProperty.call(message, "header"))
            $root.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.value);
        if (message.pulsed != null && Object.hasOwnProperty.call(message, "pulsed"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pulsed);
        if (message.measureSpeed != null && Object.hasOwnProperty.call(message, "measureSpeed"))
            $root.Measure.MeasureSpeed.encode(message.measureSpeed, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.measureCurrent != null && Object.hasOwnProperty.call(message, "measureCurrent"))
            $root.Measure.MeasureCurrent.encode(message.measureCurrent, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.measureVoltage != null && Object.hasOwnProperty.call(message, "measureVoltage"))
            $root.Measure.MeasureVoltage.encode(message.measureVoltage, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Measure message, length delimited. Does not implicitly {@link Measure.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Measure
     * @static
     * @param {IMeasure} message Measure message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Measure.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Measure message from the specified reader or buffer.
     * @function decode
     * @memberof Measure
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Measure} Measure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Measure.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Measure();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.header = $root.Header.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.value = reader.double();
                    break;
                }
            case 3: {
                    message.pulsed = reader.int32();
                    break;
                }
            case 4: {
                    message.measureSpeed = $root.Measure.MeasureSpeed.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.measureCurrent = $root.Measure.MeasureCurrent.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.measureVoltage = $root.Measure.MeasureVoltage.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Measure message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Measure
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Measure} Measure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Measure.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Measure message.
     * @function verify
     * @memberof Measure
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Measure.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.header != null && message.hasOwnProperty("header")) {
            var error = $root.Header.verify(message.header);
            if (error)
                return "header." + error;
        }
        if (message.value != null && message.hasOwnProperty("value"))
            if (typeof message.value !== "number")
                return "value: number expected";
        if (message.pulsed != null && message.hasOwnProperty("pulsed"))
            switch (message.pulsed) {
            default:
                return "pulsed: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.measureSpeed != null && message.hasOwnProperty("measureSpeed")) {
            properties.type = 1;
            {
                var error = $root.Measure.MeasureSpeed.verify(message.measureSpeed);
                if (error)
                    return "measureSpeed." + error;
            }
        }
        if (message.measureCurrent != null && message.hasOwnProperty("measureCurrent")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            {
                var error = $root.Measure.MeasureCurrent.verify(message.measureCurrent);
                if (error)
                    return "measureCurrent." + error;
            }
        }
        if (message.measureVoltage != null && message.hasOwnProperty("measureVoltage")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            {
                var error = $root.Measure.MeasureVoltage.verify(message.measureVoltage);
                if (error)
                    return "measureVoltage." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Measure message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Measure
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Measure} Measure
     */
    Measure.fromObject = function fromObject(object) {
        if (object instanceof $root.Measure)
            return object;
        var message = new $root.Measure();
        if (object.header != null) {
            if (typeof object.header !== "object")
                throw TypeError(".Measure.header: object expected");
            message.header = $root.Header.fromObject(object.header);
        }
        if (object.value != null)
            message.value = Number(object.value);
        switch (object.pulsed) {
        default:
            if (typeof object.pulsed === "number") {
                message.pulsed = object.pulsed;
                break;
            }
            break;
        case "CONTINUOUS":
        case 0:
            message.pulsed = 0;
            break;
        case "PULSED_HIGH":
        case 1:
            message.pulsed = 1;
            break;
        case "PULSED_LOW":
        case 2:
            message.pulsed = 2;
            break;
        }
        if (object.measureSpeed != null) {
            if (typeof object.measureSpeed !== "object")
                throw TypeError(".Measure.measureSpeed: object expected");
            message.measureSpeed = $root.Measure.MeasureSpeed.fromObject(object.measureSpeed);
        }
        if (object.measureCurrent != null) {
            if (typeof object.measureCurrent !== "object")
                throw TypeError(".Measure.measureCurrent: object expected");
            message.measureCurrent = $root.Measure.MeasureCurrent.fromObject(object.measureCurrent);
        }
        if (object.measureVoltage != null) {
            if (typeof object.measureVoltage !== "object")
                throw TypeError(".Measure.measureVoltage: object expected");
            message.measureVoltage = $root.Measure.MeasureVoltage.fromObject(object.measureVoltage);
        }
        return message;
    };

    /**
     * Creates a plain object from a Measure message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Measure
     * @static
     * @param {Measure} message Measure
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Measure.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.header = null;
            object.value = 0;
            object.pulsed = options.enums === String ? "CONTINUOUS" : 0;
        }
        if (message.header != null && message.hasOwnProperty("header"))
            object.header = $root.Header.toObject(message.header, options);
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
        if (message.pulsed != null && message.hasOwnProperty("pulsed"))
            object.pulsed = options.enums === String ? $root.Measure.Pulsed[message.pulsed] === undefined ? message.pulsed : $root.Measure.Pulsed[message.pulsed] : message.pulsed;
        if (message.measureSpeed != null && message.hasOwnProperty("measureSpeed")) {
            object.measureSpeed = $root.Measure.MeasureSpeed.toObject(message.measureSpeed, options);
            if (options.oneofs)
                object.type = "measureSpeed";
        }
        if (message.measureCurrent != null && message.hasOwnProperty("measureCurrent")) {
            object.measureCurrent = $root.Measure.MeasureCurrent.toObject(message.measureCurrent, options);
            if (options.oneofs)
                object.type = "measureCurrent";
        }
        if (message.measureVoltage != null && message.hasOwnProperty("measureVoltage")) {
            object.measureVoltage = $root.Measure.MeasureVoltage.toObject(message.measureVoltage, options);
            if (options.oneofs)
                object.type = "measureVoltage";
        }
        return object;
    };

    /**
     * Converts this Measure to JSON.
     * @function toJSON
     * @memberof Measure
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Measure.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Measure
     * @function getTypeUrl
     * @memberof Measure
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Measure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Measure";
    };

    /**
     * Pulsed enum.
     * @name Measure.Pulsed
     * @enum {number}
     * @property {number} CONTINUOUS=0 CONTINUOUS value
     * @property {number} PULSED_HIGH=1 PULSED_HIGH value
     * @property {number} PULSED_LOW=2 PULSED_LOW value
     */
    Measure.Pulsed = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CONTINUOUS"] = 0;
        values[valuesById[1] = "PULSED_HIGH"] = 1;
        values[valuesById[2] = "PULSED_LOW"] = 2;
        return values;
    })();

    Measure.MeasureSpeed = (function() {

        /**
         * Properties of a MeasureSpeed.
         * @memberof Measure
         * @interface IMeasureSpeed
         */

        /**
         * Constructs a new MeasureSpeed.
         * @memberof Measure
         * @classdesc Represents a MeasureSpeed.
         * @implements IMeasureSpeed
         * @constructor
         * @param {Measure.IMeasureSpeed=} [properties] Properties to set
         */
        function MeasureSpeed(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new MeasureSpeed instance using the specified properties.
         * @function create
         * @memberof Measure.MeasureSpeed
         * @static
         * @param {Measure.IMeasureSpeed=} [properties] Properties to set
         * @returns {Measure.MeasureSpeed} MeasureSpeed instance
         */
        MeasureSpeed.create = function create(properties) {
            return new MeasureSpeed(properties);
        };

        /**
         * Encodes the specified MeasureSpeed message. Does not implicitly {@link Measure.MeasureSpeed.verify|verify} messages.
         * @function encode
         * @memberof Measure.MeasureSpeed
         * @static
         * @param {Measure.IMeasureSpeed} message MeasureSpeed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MeasureSpeed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified MeasureSpeed message, length delimited. Does not implicitly {@link Measure.MeasureSpeed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Measure.MeasureSpeed
         * @static
         * @param {Measure.IMeasureSpeed} message MeasureSpeed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MeasureSpeed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MeasureSpeed message from the specified reader or buffer.
         * @function decode
         * @memberof Measure.MeasureSpeed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Measure.MeasureSpeed} MeasureSpeed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MeasureSpeed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Measure.MeasureSpeed();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MeasureSpeed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Measure.MeasureSpeed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Measure.MeasureSpeed} MeasureSpeed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MeasureSpeed.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MeasureSpeed message.
         * @function verify
         * @memberof Measure.MeasureSpeed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MeasureSpeed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a MeasureSpeed message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Measure.MeasureSpeed
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Measure.MeasureSpeed} MeasureSpeed
         */
        MeasureSpeed.fromObject = function fromObject(object) {
            if (object instanceof $root.Measure.MeasureSpeed)
                return object;
            return new $root.Measure.MeasureSpeed();
        };

        /**
         * Creates a plain object from a MeasureSpeed message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Measure.MeasureSpeed
         * @static
         * @param {Measure.MeasureSpeed} message MeasureSpeed
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MeasureSpeed.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MeasureSpeed to JSON.
         * @function toJSON
         * @memberof Measure.MeasureSpeed
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MeasureSpeed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MeasureSpeed
         * @function getTypeUrl
         * @memberof Measure.MeasureSpeed
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MeasureSpeed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Measure.MeasureSpeed";
        };

        return MeasureSpeed;
    })();

    Measure.MeasureCurrent = (function() {

        /**
         * Properties of a MeasureCurrent.
         * @memberof Measure
         * @interface IMeasureCurrent
         */

        /**
         * Constructs a new MeasureCurrent.
         * @memberof Measure
         * @classdesc Represents a MeasureCurrent.
         * @implements IMeasureCurrent
         * @constructor
         * @param {Measure.IMeasureCurrent=} [properties] Properties to set
         */
        function MeasureCurrent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new MeasureCurrent instance using the specified properties.
         * @function create
         * @memberof Measure.MeasureCurrent
         * @static
         * @param {Measure.IMeasureCurrent=} [properties] Properties to set
         * @returns {Measure.MeasureCurrent} MeasureCurrent instance
         */
        MeasureCurrent.create = function create(properties) {
            return new MeasureCurrent(properties);
        };

        /**
         * Encodes the specified MeasureCurrent message. Does not implicitly {@link Measure.MeasureCurrent.verify|verify} messages.
         * @function encode
         * @memberof Measure.MeasureCurrent
         * @static
         * @param {Measure.IMeasureCurrent} message MeasureCurrent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MeasureCurrent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified MeasureCurrent message, length delimited. Does not implicitly {@link Measure.MeasureCurrent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Measure.MeasureCurrent
         * @static
         * @param {Measure.IMeasureCurrent} message MeasureCurrent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MeasureCurrent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MeasureCurrent message from the specified reader or buffer.
         * @function decode
         * @memberof Measure.MeasureCurrent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Measure.MeasureCurrent} MeasureCurrent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MeasureCurrent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Measure.MeasureCurrent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MeasureCurrent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Measure.MeasureCurrent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Measure.MeasureCurrent} MeasureCurrent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MeasureCurrent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MeasureCurrent message.
         * @function verify
         * @memberof Measure.MeasureCurrent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MeasureCurrent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a MeasureCurrent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Measure.MeasureCurrent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Measure.MeasureCurrent} MeasureCurrent
         */
        MeasureCurrent.fromObject = function fromObject(object) {
            if (object instanceof $root.Measure.MeasureCurrent)
                return object;
            return new $root.Measure.MeasureCurrent();
        };

        /**
         * Creates a plain object from a MeasureCurrent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Measure.MeasureCurrent
         * @static
         * @param {Measure.MeasureCurrent} message MeasureCurrent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MeasureCurrent.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MeasureCurrent to JSON.
         * @function toJSON
         * @memberof Measure.MeasureCurrent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MeasureCurrent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MeasureCurrent
         * @function getTypeUrl
         * @memberof Measure.MeasureCurrent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MeasureCurrent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Measure.MeasureCurrent";
        };

        return MeasureCurrent;
    })();

    Measure.MeasureVoltage = (function() {

        /**
         * Properties of a MeasureVoltage.
         * @memberof Measure
         * @interface IMeasureVoltage
         */

        /**
         * Constructs a new MeasureVoltage.
         * @memberof Measure
         * @classdesc Represents a MeasureVoltage.
         * @implements IMeasureVoltage
         * @constructor
         * @param {Measure.IMeasureVoltage=} [properties] Properties to set
         */
        function MeasureVoltage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new MeasureVoltage instance using the specified properties.
         * @function create
         * @memberof Measure.MeasureVoltage
         * @static
         * @param {Measure.IMeasureVoltage=} [properties] Properties to set
         * @returns {Measure.MeasureVoltage} MeasureVoltage instance
         */
        MeasureVoltage.create = function create(properties) {
            return new MeasureVoltage(properties);
        };

        /**
         * Encodes the specified MeasureVoltage message. Does not implicitly {@link Measure.MeasureVoltage.verify|verify} messages.
         * @function encode
         * @memberof Measure.MeasureVoltage
         * @static
         * @param {Measure.IMeasureVoltage} message MeasureVoltage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MeasureVoltage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified MeasureVoltage message, length delimited. Does not implicitly {@link Measure.MeasureVoltage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Measure.MeasureVoltage
         * @static
         * @param {Measure.IMeasureVoltage} message MeasureVoltage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MeasureVoltage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MeasureVoltage message from the specified reader or buffer.
         * @function decode
         * @memberof Measure.MeasureVoltage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Measure.MeasureVoltage} MeasureVoltage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MeasureVoltage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Measure.MeasureVoltage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MeasureVoltage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Measure.MeasureVoltage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Measure.MeasureVoltage} MeasureVoltage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MeasureVoltage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MeasureVoltage message.
         * @function verify
         * @memberof Measure.MeasureVoltage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MeasureVoltage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a MeasureVoltage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Measure.MeasureVoltage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Measure.MeasureVoltage} MeasureVoltage
         */
        MeasureVoltage.fromObject = function fromObject(object) {
            if (object instanceof $root.Measure.MeasureVoltage)
                return object;
            return new $root.Measure.MeasureVoltage();
        };

        /**
         * Creates a plain object from a MeasureVoltage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Measure.MeasureVoltage
         * @static
         * @param {Measure.MeasureVoltage} message MeasureVoltage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MeasureVoltage.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MeasureVoltage to JSON.
         * @function toJSON
         * @memberof Measure.MeasureVoltage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MeasureVoltage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MeasureVoltage
         * @function getTypeUrl
         * @memberof Measure.MeasureVoltage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MeasureVoltage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Measure.MeasureVoltage";
        };

        return MeasureVoltage;
    })();

    return Measure;
})();

$root.RequestResponse = (function() {

    /**
     * Properties of a RequestResponse.
     * @exports IRequestResponse
     * @interface IRequestResponse
     * @property {string|null} [status] RequestResponse status
     * @property {string|null} [message] RequestResponse message
     */

    /**
     * Constructs a new RequestResponse.
     * @exports RequestResponse
     * @classdesc Represents a RequestResponse.
     * @implements IRequestResponse
     * @constructor
     * @param {IRequestResponse=} [properties] Properties to set
     */
    function RequestResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RequestResponse status.
     * @member {string} status
     * @memberof RequestResponse
     * @instance
     */
    RequestResponse.prototype.status = "";

    /**
     * RequestResponse message.
     * @member {string} message
     * @memberof RequestResponse
     * @instance
     */
    RequestResponse.prototype.message = "";

    /**
     * Creates a new RequestResponse instance using the specified properties.
     * @function create
     * @memberof RequestResponse
     * @static
     * @param {IRequestResponse=} [properties] Properties to set
     * @returns {RequestResponse} RequestResponse instance
     */
    RequestResponse.create = function create(properties) {
        return new RequestResponse(properties);
    };

    /**
     * Encodes the specified RequestResponse message. Does not implicitly {@link RequestResponse.verify|verify} messages.
     * @function encode
     * @memberof RequestResponse
     * @static
     * @param {IRequestResponse} message RequestResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.status);
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
        return writer;
    };

    /**
     * Encodes the specified RequestResponse message, length delimited. Does not implicitly {@link RequestResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestResponse
     * @static
     * @param {IRequestResponse} message RequestResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestResponse message from the specified reader or buffer.
     * @function decode
     * @memberof RequestResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestResponse} RequestResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.string();
                    break;
                }
            case 2: {
                    message.message = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestResponse} RequestResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestResponse message.
     * @function verify
     * @memberof RequestResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isString(message.status))
                return "status: string expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        return null;
    };

    /**
     * Creates a RequestResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestResponse} RequestResponse
     */
    RequestResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestResponse)
            return object;
        var message = new $root.RequestResponse();
        if (object.status != null)
            message.status = String(object.status);
        if (object.message != null)
            message.message = String(object.message);
        return message;
    };

    /**
     * Creates a plain object from a RequestResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestResponse
     * @static
     * @param {RequestResponse} message RequestResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.status = "";
            object.message = "";
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        return object;
    };

    /**
     * Converts this RequestResponse to JSON.
     * @function toJSON
     * @memberof RequestResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RequestResponse
     * @function getTypeUrl
     * @memberof RequestResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RequestResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RequestResponse";
    };

    return RequestResponse;
})();

module.exports = $root;
