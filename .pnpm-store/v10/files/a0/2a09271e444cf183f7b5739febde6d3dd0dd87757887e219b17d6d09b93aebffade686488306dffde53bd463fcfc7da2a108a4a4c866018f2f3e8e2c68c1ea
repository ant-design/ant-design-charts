"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const events_1 = require("./events");
const S = require("./serializers");
class Serializer extends utils_1.EventDispatcher {
    constructor() {
        super();
        this.serializers = new Map();
        addSerializers(this);
    }
    addSerializer(serializer) {
        let group = this.serializers.get(serializer.serializeGroup);
        if (!group) {
            this.serializers.set(serializer.serializeGroup, (group = []));
        }
        group.push(serializer);
        group.sort((a, b) => b.priority - a.priority);
    }
    toObject(value, init = {}) {
        return this.findSerializers(value).reduce((result, curr) => curr.toObject(value, result), init);
    }
    projectToObject(value, eventData = {}) {
        const eventBegin = new events_1.SerializeEvent(Serializer.EVENT_BEGIN, value, {});
        if (eventData.begin) {
            eventBegin.outputDirectory = eventData.begin.outputDirectory;
            eventBegin.outputFile = eventData.begin.outputFile;
        }
        this.trigger(eventBegin);
        const project = this.toObject(value, eventBegin.output);
        const eventEnd = new events_1.SerializeEvent(Serializer.EVENT_END, value, project);
        if (eventData.end) {
            eventBegin.outputDirectory = eventData.end.outputDirectory;
            eventBegin.outputFile = eventData.end.outputFile;
        }
        this.trigger(eventEnd);
        return project;
    }
    findSerializers(value) {
        const routes = [];
        for (const [groupSupports, components] of this.serializers.entries()) {
            if (groupSupports(value)) {
                for (const component of components) {
                    if (component.supports(value)) {
                        routes.push(component);
                    }
                }
            }
        }
        return routes;
    }
}
exports.Serializer = Serializer;
Serializer.EVENT_BEGIN = 'begin';
Serializer.EVENT_END = 'end';
const serializerComponents = [
    S.CommentTagSerializer,
    S.CommentSerializer,
    S.ReflectionSerializer,
    S.ReferenceReflectionSerializer,
    S.ContainerReflectionSerializer,
    S.DeclarationReflectionSerializer,
    S.ParameterReflectionSerializer,
    S.ProjectReflectionSerializer,
    S.SignatureReflectionSerializer,
    S.TypeParameterReflectionSerializer,
    S.SourceReferenceContainerSerializer,
    S.TypeSerializer,
    S.ArrayTypeSerializer,
    S.ConditionalTypeSerializer,
    S.IndexedAccessTypeSerializer,
    S.InferredTypeSerializer,
    S.IntersectionTypeSerializer,
    S.IntrinsicTypeSerializer,
    S.QueryTypeSerializer,
    S.PredicateTypeSerializer,
    S.ReferenceTypeSerializer,
    S.ReferenceTypeSerializer,
    S.ReflectionTypeSerializer,
    S.StringLiteralTypeSerializer,
    S.TupleTypeSerializer,
    S.TypeOperatorTypeSerializer,
    S.TypeParameterTypeSerializer,
    S.UnionTypeSerializer,
    S.UnknownTypeSerializer,
    S.DecoratorContainerSerializer,
    S.ReflectionCategorySerializer,
    S.ReflectionGroupSerializer
];
function addSerializers(owner) {
    for (const component of serializerComponents) {
        owner.addSerializer(new component(owner));
    }
}
//# sourceMappingURL=serializer.js.map