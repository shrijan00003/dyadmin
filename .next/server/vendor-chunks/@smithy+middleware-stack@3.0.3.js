"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@smithy+middleware-stack@3.0.3";
exports.ids = ["vendor-chunks/@smithy+middleware-stack@3.0.3"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/@smithy+middleware-stack@3.0.3/node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+middleware-stack@3.0.3/node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   constructStack: () => (/* binding */ constructStack)\n/* harmony export */ });\nconst getAllAliases = (name, aliases) => {\n    const _aliases = [];\n    if (name) {\n        _aliases.push(name);\n    }\n    if (aliases) {\n        for (const alias of aliases) {\n            _aliases.push(alias);\n        }\n    }\n    return _aliases;\n};\nconst getMiddlewareNameWithAliases = (name, aliases) => {\n    return `${name || \"anonymous\"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(\",\")})` : \"\"}`;\n};\nconst constructStack = () => {\n    let absoluteEntries = [];\n    let relativeEntries = [];\n    let identifyOnResolve = false;\n    const entriesNameSet = new Set();\n    const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] ||\n        priorityWeights[b.priority || \"normal\"] - priorityWeights[a.priority || \"normal\"]);\n    const removeByName = (toRemove) => {\n        let isRemoved = false;\n        const filterCb = (entry) => {\n            const aliases = getAllAliases(entry.name, entry.aliases);\n            if (aliases.includes(toRemove)) {\n                isRemoved = true;\n                for (const alias of aliases) {\n                    entriesNameSet.delete(alias);\n                }\n                return false;\n            }\n            return true;\n        };\n        absoluteEntries = absoluteEntries.filter(filterCb);\n        relativeEntries = relativeEntries.filter(filterCb);\n        return isRemoved;\n    };\n    const removeByReference = (toRemove) => {\n        let isRemoved = false;\n        const filterCb = (entry) => {\n            if (entry.middleware === toRemove) {\n                isRemoved = true;\n                for (const alias of getAllAliases(entry.name, entry.aliases)) {\n                    entriesNameSet.delete(alias);\n                }\n                return false;\n            }\n            return true;\n        };\n        absoluteEntries = absoluteEntries.filter(filterCb);\n        relativeEntries = relativeEntries.filter(filterCb);\n        return isRemoved;\n    };\n    const cloneTo = (toStack) => {\n        absoluteEntries.forEach((entry) => {\n            toStack.add(entry.middleware, { ...entry });\n        });\n        relativeEntries.forEach((entry) => {\n            toStack.addRelativeTo(entry.middleware, { ...entry });\n        });\n        toStack.identifyOnResolve?.(stack.identifyOnResolve());\n        return toStack;\n    };\n    const expandRelativeMiddlewareList = (from) => {\n        const expandedMiddlewareList = [];\n        from.before.forEach((entry) => {\n            if (entry.before.length === 0 && entry.after.length === 0) {\n                expandedMiddlewareList.push(entry);\n            }\n            else {\n                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));\n            }\n        });\n        expandedMiddlewareList.push(from);\n        from.after.reverse().forEach((entry) => {\n            if (entry.before.length === 0 && entry.after.length === 0) {\n                expandedMiddlewareList.push(entry);\n            }\n            else {\n                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));\n            }\n        });\n        return expandedMiddlewareList;\n    };\n    const getMiddlewareList = (debug = false) => {\n        const normalizedAbsoluteEntries = [];\n        const normalizedRelativeEntries = [];\n        const normalizedEntriesNameMap = {};\n        absoluteEntries.forEach((entry) => {\n            const normalizedEntry = {\n                ...entry,\n                before: [],\n                after: [],\n            };\n            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {\n                normalizedEntriesNameMap[alias] = normalizedEntry;\n            }\n            normalizedAbsoluteEntries.push(normalizedEntry);\n        });\n        relativeEntries.forEach((entry) => {\n            const normalizedEntry = {\n                ...entry,\n                before: [],\n                after: [],\n            };\n            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {\n                normalizedEntriesNameMap[alias] = normalizedEntry;\n            }\n            normalizedRelativeEntries.push(normalizedEntry);\n        });\n        normalizedRelativeEntries.forEach((entry) => {\n            if (entry.toMiddleware) {\n                const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];\n                if (toMiddleware === undefined) {\n                    if (debug) {\n                        return;\n                    }\n                    throw new Error(`${entry.toMiddleware} is not found when adding ` +\n                        `${getMiddlewareNameWithAliases(entry.name, entry.aliases)} ` +\n                        `middleware ${entry.relation} ${entry.toMiddleware}`);\n                }\n                if (entry.relation === \"after\") {\n                    toMiddleware.after.push(entry);\n                }\n                if (entry.relation === \"before\") {\n                    toMiddleware.before.push(entry);\n                }\n            }\n        });\n        const mainChain = sort(normalizedAbsoluteEntries)\n            .map(expandRelativeMiddlewareList)\n            .reduce((wholeList, expandedMiddlewareList) => {\n            wholeList.push(...expandedMiddlewareList);\n            return wholeList;\n        }, []);\n        return mainChain;\n    };\n    const stack = {\n        add: (middleware, options = {}) => {\n            const { name, override, aliases: _aliases } = options;\n            const entry = {\n                step: \"initialize\",\n                priority: \"normal\",\n                middleware,\n                ...options,\n            };\n            const aliases = getAllAliases(name, _aliases);\n            if (aliases.length > 0) {\n                if (aliases.some((alias) => entriesNameSet.has(alias))) {\n                    if (!override)\n                        throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);\n                    for (const alias of aliases) {\n                        const toOverrideIndex = absoluteEntries.findIndex((entry) => entry.name === alias || entry.aliases?.some((a) => a === alias));\n                        if (toOverrideIndex === -1) {\n                            continue;\n                        }\n                        const toOverride = absoluteEntries[toOverrideIndex];\n                        if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {\n                            throw new Error(`\"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}\" middleware with ` +\n                                `${toOverride.priority} priority in ${toOverride.step} step cannot ` +\n                                `be overridden by \"${getMiddlewareNameWithAliases(name, _aliases)}\" middleware with ` +\n                                `${entry.priority} priority in ${entry.step} step.`);\n                        }\n                        absoluteEntries.splice(toOverrideIndex, 1);\n                    }\n                }\n                for (const alias of aliases) {\n                    entriesNameSet.add(alias);\n                }\n            }\n            absoluteEntries.push(entry);\n        },\n        addRelativeTo: (middleware, options) => {\n            const { name, override, aliases: _aliases } = options;\n            const entry = {\n                middleware,\n                ...options,\n            };\n            const aliases = getAllAliases(name, _aliases);\n            if (aliases.length > 0) {\n                if (aliases.some((alias) => entriesNameSet.has(alias))) {\n                    if (!override)\n                        throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);\n                    for (const alias of aliases) {\n                        const toOverrideIndex = relativeEntries.findIndex((entry) => entry.name === alias || entry.aliases?.some((a) => a === alias));\n                        if (toOverrideIndex === -1) {\n                            continue;\n                        }\n                        const toOverride = relativeEntries[toOverrideIndex];\n                        if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {\n                            throw new Error(`\"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}\" middleware ` +\n                                `${toOverride.relation} \"${toOverride.toMiddleware}\" middleware cannot be overridden ` +\n                                `by \"${getMiddlewareNameWithAliases(name, _aliases)}\" middleware ${entry.relation} ` +\n                                `\"${entry.toMiddleware}\" middleware.`);\n                        }\n                        relativeEntries.splice(toOverrideIndex, 1);\n                    }\n                }\n                for (const alias of aliases) {\n                    entriesNameSet.add(alias);\n                }\n            }\n            relativeEntries.push(entry);\n        },\n        clone: () => cloneTo(constructStack()),\n        use: (plugin) => {\n            plugin.applyToStack(stack);\n        },\n        remove: (toRemove) => {\n            if (typeof toRemove === \"string\")\n                return removeByName(toRemove);\n            else\n                return removeByReference(toRemove);\n        },\n        removeByTag: (toRemove) => {\n            let isRemoved = false;\n            const filterCb = (entry) => {\n                const { tags, name, aliases: _aliases } = entry;\n                if (tags && tags.includes(toRemove)) {\n                    const aliases = getAllAliases(name, _aliases);\n                    for (const alias of aliases) {\n                        entriesNameSet.delete(alias);\n                    }\n                    isRemoved = true;\n                    return false;\n                }\n                return true;\n            };\n            absoluteEntries = absoluteEntries.filter(filterCb);\n            relativeEntries = relativeEntries.filter(filterCb);\n            return isRemoved;\n        },\n        concat: (from) => {\n            const cloned = cloneTo(constructStack());\n            cloned.use(from);\n            cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));\n            return cloned;\n        },\n        applyToStack: cloneTo,\n        identify: () => {\n            return getMiddlewareList(true).map((mw) => {\n                const step = mw.step ??\n                    mw.relation +\n                        \" \" +\n                        mw.toMiddleware;\n                return getMiddlewareNameWithAliases(mw.name, mw.aliases) + \" - \" + step;\n            });\n        },\n        identifyOnResolve(toggle) {\n            if (typeof toggle === \"boolean\")\n                identifyOnResolve = toggle;\n            return identifyOnResolve;\n        },\n        resolve: (handler, context) => {\n            for (const middleware of getMiddlewareList()\n                .map((entry) => entry.middleware)\n                .reverse()) {\n                handler = middleware(handler, context);\n            }\n            if (identifyOnResolve) {\n                console.log(stack.identify());\n            }\n            return handler;\n        },\n    };\n    return stack;\n};\nconst stepWeights = {\n    initialize: 5,\n    serialize: 4,\n    build: 3,\n    finalizeRequest: 2,\n    deserialize: 1,\n};\nconst priorityWeights = {\n    high: 3,\n    normal: 2,\n    low: 1,\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSttaWRkbGV3YXJlLXN0YWNrQDMuMC4zL25vZGVfbW9kdWxlcy9Ac21pdGh5L21pZGRsZXdhcmUtc3RhY2svZGlzdC1lcy9NaWRkbGV3YXJlU3RhY2suanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxvQkFBb0IsRUFBRSw0Q0FBNEMsa0JBQWtCLFFBQVE7QUFDMUc7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVTtBQUN0RCxTQUFTO0FBQ1Q7QUFDQSxzREFBc0QsVUFBVTtBQUNoRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsb0JBQW9CO0FBQzNELDJCQUEyQix5REFBeUQ7QUFDcEYsc0NBQXNDLGdCQUFnQixFQUFFLG1CQUFtQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLG9CQUFvQixvQ0FBb0M7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsNkNBQTZDO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGtFQUFrRTtBQUNsSCxtQ0FBbUMscUJBQXFCLGNBQWMsaUJBQWlCO0FBQ3ZGLHFEQUFxRCw2Q0FBNkM7QUFDbEcsbUNBQW1DLGdCQUFnQixjQUFjLFlBQVk7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esb0JBQW9CLG9DQUFvQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLDZDQUE2QztBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxrRUFBa0U7QUFDbEgsbUNBQW1DLHFCQUFxQixHQUFHLHdCQUF3QjtBQUNuRix1Q0FBdUMsNkNBQTZDLGVBQWUsZ0JBQWdCO0FBQ25ILG9DQUFvQyxtQkFBbUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQ0FBZ0M7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYS0wLjAuMS8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K21pZGRsZXdhcmUtc3RhY2tAMy4wLjMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvbWlkZGxld2FyZS1zdGFjay9kaXN0LWVzL01pZGRsZXdhcmVTdGFjay5qcz9mNDFjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldEFsbEFsaWFzZXMgPSAobmFtZSwgYWxpYXNlcykgPT4ge1xuICAgIGNvbnN0IF9hbGlhc2VzID0gW107XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgICAgX2FsaWFzZXMucHVzaChuYW1lKTtcbiAgICB9XG4gICAgaWYgKGFsaWFzZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBhbGlhcyBvZiBhbGlhc2VzKSB7XG4gICAgICAgICAgICBfYWxpYXNlcy5wdXNoKGFsaWFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX2FsaWFzZXM7XG59O1xuY29uc3QgZ2V0TWlkZGxld2FyZU5hbWVXaXRoQWxpYXNlcyA9IChuYW1lLCBhbGlhc2VzKSA9PiB7XG4gICAgcmV0dXJuIGAke25hbWUgfHwgXCJhbm9ueW1vdXNcIn0ke2FsaWFzZXMgJiYgYWxpYXNlcy5sZW5ndGggPiAwID8gYCAoYS5rLmEuICR7YWxpYXNlcy5qb2luKFwiLFwiKX0pYCA6IFwiXCJ9YDtcbn07XG5leHBvcnQgY29uc3QgY29uc3RydWN0U3RhY2sgPSAoKSA9PiB7XG4gICAgbGV0IGFic29sdXRlRW50cmllcyA9IFtdO1xuICAgIGxldCByZWxhdGl2ZUVudHJpZXMgPSBbXTtcbiAgICBsZXQgaWRlbnRpZnlPblJlc29sdmUgPSBmYWxzZTtcbiAgICBjb25zdCBlbnRyaWVzTmFtZVNldCA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBzb3J0ID0gKGVudHJpZXMpID0+IGVudHJpZXMuc29ydCgoYSwgYikgPT4gc3RlcFdlaWdodHNbYi5zdGVwXSAtIHN0ZXBXZWlnaHRzW2Euc3RlcF0gfHxcbiAgICAgICAgcHJpb3JpdHlXZWlnaHRzW2IucHJpb3JpdHkgfHwgXCJub3JtYWxcIl0gLSBwcmlvcml0eVdlaWdodHNbYS5wcmlvcml0eSB8fCBcIm5vcm1hbFwiXSk7XG4gICAgY29uc3QgcmVtb3ZlQnlOYW1lID0gKHRvUmVtb3ZlKSA9PiB7XG4gICAgICAgIGxldCBpc1JlbW92ZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgZmlsdGVyQ2IgPSAoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFsaWFzZXMgPSBnZXRBbGxBbGlhc2VzKGVudHJ5Lm5hbWUsIGVudHJ5LmFsaWFzZXMpO1xuICAgICAgICAgICAgaWYgKGFsaWFzZXMuaW5jbHVkZXModG9SZW1vdmUpKSB7XG4gICAgICAgICAgICAgICAgaXNSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFsaWFzIG9mIGFsaWFzZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllc05hbWVTZXQuZGVsZXRlKGFsaWFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGFic29sdXRlRW50cmllcyA9IGFic29sdXRlRW50cmllcy5maWx0ZXIoZmlsdGVyQ2IpO1xuICAgICAgICByZWxhdGl2ZUVudHJpZXMgPSByZWxhdGl2ZUVudHJpZXMuZmlsdGVyKGZpbHRlckNiKTtcbiAgICAgICAgcmV0dXJuIGlzUmVtb3ZlZDtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZUJ5UmVmZXJlbmNlID0gKHRvUmVtb3ZlKSA9PiB7XG4gICAgICAgIGxldCBpc1JlbW92ZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgZmlsdGVyQ2IgPSAoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5taWRkbGV3YXJlID09PSB0b1JlbW92ZSkge1xuICAgICAgICAgICAgICAgIGlzUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhbGlhcyBvZiBnZXRBbGxBbGlhc2VzKGVudHJ5Lm5hbWUsIGVudHJ5LmFsaWFzZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJpZXNOYW1lU2V0LmRlbGV0ZShhbGlhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBhYnNvbHV0ZUVudHJpZXMgPSBhYnNvbHV0ZUVudHJpZXMuZmlsdGVyKGZpbHRlckNiKTtcbiAgICAgICAgcmVsYXRpdmVFbnRyaWVzID0gcmVsYXRpdmVFbnRyaWVzLmZpbHRlcihmaWx0ZXJDYik7XG4gICAgICAgIHJldHVybiBpc1JlbW92ZWQ7XG4gICAgfTtcbiAgICBjb25zdCBjbG9uZVRvID0gKHRvU3RhY2spID0+IHtcbiAgICAgICAgYWJzb2x1dGVFbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICB0b1N0YWNrLmFkZChlbnRyeS5taWRkbGV3YXJlLCB7IC4uLmVudHJ5IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVsYXRpdmVFbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICB0b1N0YWNrLmFkZFJlbGF0aXZlVG8oZW50cnkubWlkZGxld2FyZSwgeyAuLi5lbnRyeSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRvU3RhY2suaWRlbnRpZnlPblJlc29sdmU/LihzdGFjay5pZGVudGlmeU9uUmVzb2x2ZSgpKTtcbiAgICAgICAgcmV0dXJuIHRvU3RhY2s7XG4gICAgfTtcbiAgICBjb25zdCBleHBhbmRSZWxhdGl2ZU1pZGRsZXdhcmVMaXN0ID0gKGZyb20pID0+IHtcbiAgICAgICAgY29uc3QgZXhwYW5kZWRNaWRkbGV3YXJlTGlzdCA9IFtdO1xuICAgICAgICBmcm9tLmJlZm9yZS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmJlZm9yZS5sZW5ndGggPT09IDAgJiYgZW50cnkuYWZ0ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWRNaWRkbGV3YXJlTGlzdC5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkTWlkZGxld2FyZUxpc3QucHVzaCguLi5leHBhbmRSZWxhdGl2ZU1pZGRsZXdhcmVMaXN0KGVudHJ5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBleHBhbmRlZE1pZGRsZXdhcmVMaXN0LnB1c2goZnJvbSk7XG4gICAgICAgIGZyb20uYWZ0ZXIucmV2ZXJzZSgpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnkuYmVmb3JlLmxlbmd0aCA9PT0gMCAmJiBlbnRyeS5hZnRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBleHBhbmRlZE1pZGRsZXdhcmVMaXN0LnB1c2goZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWRNaWRkbGV3YXJlTGlzdC5wdXNoKC4uLmV4cGFuZFJlbGF0aXZlTWlkZGxld2FyZUxpc3QoZW50cnkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBleHBhbmRlZE1pZGRsZXdhcmVMaXN0O1xuICAgIH07XG4gICAgY29uc3QgZ2V0TWlkZGxld2FyZUxpc3QgPSAoZGVidWcgPSBmYWxzZSkgPT4ge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkQWJzb2x1dGVFbnRyaWVzID0gW107XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRSZWxhdGl2ZUVudHJpZXMgPSBbXTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZEVudHJpZXNOYW1lTWFwID0ge307XG4gICAgICAgIGFic29sdXRlRW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZEVudHJ5ID0ge1xuICAgICAgICAgICAgICAgIC4uLmVudHJ5LFxuICAgICAgICAgICAgICAgIGJlZm9yZTogW10sXG4gICAgICAgICAgICAgICAgYWZ0ZXI6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYWxpYXMgb2YgZ2V0QWxsQWxpYXNlcyhub3JtYWxpemVkRW50cnkubmFtZSwgbm9ybWFsaXplZEVudHJ5LmFsaWFzZXMpKSB7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZEVudHJpZXNOYW1lTWFwW2FsaWFzXSA9IG5vcm1hbGl6ZWRFbnRyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vcm1hbGl6ZWRBYnNvbHV0ZUVudHJpZXMucHVzaChub3JtYWxpemVkRW50cnkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVsYXRpdmVFbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkRW50cnkgPSB7XG4gICAgICAgICAgICAgICAgLi4uZW50cnksXG4gICAgICAgICAgICAgICAgYmVmb3JlOiBbXSxcbiAgICAgICAgICAgICAgICBhZnRlcjogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBhbGlhcyBvZiBnZXRBbGxBbGlhc2VzKG5vcm1hbGl6ZWRFbnRyeS5uYW1lLCBub3JtYWxpemVkRW50cnkuYWxpYXNlcykpIHtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkRW50cmllc05hbWVNYXBbYWxpYXNdID0gbm9ybWFsaXplZEVudHJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9ybWFsaXplZFJlbGF0aXZlRW50cmllcy5wdXNoKG5vcm1hbGl6ZWRFbnRyeSk7XG4gICAgICAgIH0pO1xuICAgICAgICBub3JtYWxpemVkUmVsYXRpdmVFbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnkudG9NaWRkbGV3YXJlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9NaWRkbGV3YXJlID0gbm9ybWFsaXplZEVudHJpZXNOYW1lTWFwW2VudHJ5LnRvTWlkZGxld2FyZV07XG4gICAgICAgICAgICAgICAgaWYgKHRvTWlkZGxld2FyZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtlbnRyeS50b01pZGRsZXdhcmV9IGlzIG5vdCBmb3VuZCB3aGVuIGFkZGluZyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke2dldE1pZGRsZXdhcmVOYW1lV2l0aEFsaWFzZXMoZW50cnkubmFtZSwgZW50cnkuYWxpYXNlcyl9IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYG1pZGRsZXdhcmUgJHtlbnRyeS5yZWxhdGlvbn0gJHtlbnRyeS50b01pZGRsZXdhcmV9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5yZWxhdGlvbiA9PT0gXCJhZnRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvTWlkZGxld2FyZS5hZnRlci5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LnJlbGF0aW9uID09PSBcImJlZm9yZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvTWlkZGxld2FyZS5iZWZvcmUucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbWFpbkNoYWluID0gc29ydChub3JtYWxpemVkQWJzb2x1dGVFbnRyaWVzKVxuICAgICAgICAgICAgLm1hcChleHBhbmRSZWxhdGl2ZU1pZGRsZXdhcmVMaXN0KVxuICAgICAgICAgICAgLnJlZHVjZSgod2hvbGVMaXN0LCBleHBhbmRlZE1pZGRsZXdhcmVMaXN0KSA9PiB7XG4gICAgICAgICAgICB3aG9sZUxpc3QucHVzaCguLi5leHBhbmRlZE1pZGRsZXdhcmVMaXN0KTtcbiAgICAgICAgICAgIHJldHVybiB3aG9sZUxpc3Q7XG4gICAgICAgIH0sIFtdKTtcbiAgICAgICAgcmV0dXJuIG1haW5DaGFpbjtcbiAgICB9O1xuICAgIGNvbnN0IHN0YWNrID0ge1xuICAgICAgICBhZGQ6IChtaWRkbGV3YXJlLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgb3ZlcnJpZGUsIGFsaWFzZXM6IF9hbGlhc2VzIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgZW50cnkgPSB7XG4gICAgICAgICAgICAgICAgc3RlcDogXCJpbml0aWFsaXplXCIsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgbWlkZGxld2FyZSxcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGFsaWFzZXMgPSBnZXRBbGxBbGlhc2VzKG5hbWUsIF9hbGlhc2VzKTtcbiAgICAgICAgICAgIGlmIChhbGlhc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoYWxpYXNlcy5zb21lKChhbGlhcykgPT4gZW50cmllc05hbWVTZXQuaGFzKGFsaWFzKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvdmVycmlkZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRHVwbGljYXRlIG1pZGRsZXdhcmUgbmFtZSAnJHtnZXRNaWRkbGV3YXJlTmFtZVdpdGhBbGlhc2VzKG5hbWUsIF9hbGlhc2VzKX0nYCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYWxpYXMgb2YgYWxpYXNlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9PdmVycmlkZUluZGV4ID0gYWJzb2x1dGVFbnRyaWVzLmZpbmRJbmRleCgoZW50cnkpID0+IGVudHJ5Lm5hbWUgPT09IGFsaWFzIHx8IGVudHJ5LmFsaWFzZXM/LnNvbWUoKGEpID0+IGEgPT09IGFsaWFzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9PdmVycmlkZUluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9PdmVycmlkZSA9IGFic29sdXRlRW50cmllc1t0b092ZXJyaWRlSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvT3ZlcnJpZGUuc3RlcCAhPT0gZW50cnkuc3RlcCB8fCBlbnRyeS5wcmlvcml0eSAhPT0gdG9PdmVycmlkZS5wcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke2dldE1pZGRsZXdhcmVOYW1lV2l0aEFsaWFzZXModG9PdmVycmlkZS5uYW1lLCB0b092ZXJyaWRlLmFsaWFzZXMpfVwiIG1pZGRsZXdhcmUgd2l0aCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dG9PdmVycmlkZS5wcmlvcml0eX0gcHJpb3JpdHkgaW4gJHt0b092ZXJyaWRlLnN0ZXB9IHN0ZXAgY2Fubm90IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYmUgb3ZlcnJpZGRlbiBieSBcIiR7Z2V0TWlkZGxld2FyZU5hbWVXaXRoQWxpYXNlcyhuYW1lLCBfYWxpYXNlcyl9XCIgbWlkZGxld2FyZSB3aXRoIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtlbnRyeS5wcmlvcml0eX0gcHJpb3JpdHkgaW4gJHtlbnRyeS5zdGVwfSBzdGVwLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWJzb2x1dGVFbnRyaWVzLnNwbGljZSh0b092ZXJyaWRlSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYWxpYXMgb2YgYWxpYXNlcykge1xuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzTmFtZVNldC5hZGQoYWxpYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFic29sdXRlRW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkUmVsYXRpdmVUbzogKG1pZGRsZXdhcmUsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgb3ZlcnJpZGUsIGFsaWFzZXM6IF9hbGlhc2VzIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgZW50cnkgPSB7XG4gICAgICAgICAgICAgICAgbWlkZGxld2FyZSxcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGFsaWFzZXMgPSBnZXRBbGxBbGlhc2VzKG5hbWUsIF9hbGlhc2VzKTtcbiAgICAgICAgICAgIGlmIChhbGlhc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoYWxpYXNlcy5zb21lKChhbGlhcykgPT4gZW50cmllc05hbWVTZXQuaGFzKGFsaWFzKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvdmVycmlkZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRHVwbGljYXRlIG1pZGRsZXdhcmUgbmFtZSAnJHtnZXRNaWRkbGV3YXJlTmFtZVdpdGhBbGlhc2VzKG5hbWUsIF9hbGlhc2VzKX0nYCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYWxpYXMgb2YgYWxpYXNlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9PdmVycmlkZUluZGV4ID0gcmVsYXRpdmVFbnRyaWVzLmZpbmRJbmRleCgoZW50cnkpID0+IGVudHJ5Lm5hbWUgPT09IGFsaWFzIHx8IGVudHJ5LmFsaWFzZXM/LnNvbWUoKGEpID0+IGEgPT09IGFsaWFzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9PdmVycmlkZUluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9PdmVycmlkZSA9IHJlbGF0aXZlRW50cmllc1t0b092ZXJyaWRlSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvT3ZlcnJpZGUudG9NaWRkbGV3YXJlICE9PSBlbnRyeS50b01pZGRsZXdhcmUgfHwgdG9PdmVycmlkZS5yZWxhdGlvbiAhPT0gZW50cnkucmVsYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFwiJHtnZXRNaWRkbGV3YXJlTmFtZVdpdGhBbGlhc2VzKHRvT3ZlcnJpZGUubmFtZSwgdG9PdmVycmlkZS5hbGlhc2VzKX1cIiBtaWRkbGV3YXJlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0b092ZXJyaWRlLnJlbGF0aW9ufSBcIiR7dG9PdmVycmlkZS50b01pZGRsZXdhcmV9XCIgbWlkZGxld2FyZSBjYW5ub3QgYmUgb3ZlcnJpZGRlbiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGJ5IFwiJHtnZXRNaWRkbGV3YXJlTmFtZVdpdGhBbGlhc2VzKG5hbWUsIF9hbGlhc2VzKX1cIiBtaWRkbGV3YXJlICR7ZW50cnkucmVsYXRpb259IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXCIke2VudHJ5LnRvTWlkZGxld2FyZX1cIiBtaWRkbGV3YXJlLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVFbnRyaWVzLnNwbGljZSh0b092ZXJyaWRlSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYWxpYXMgb2YgYWxpYXNlcykge1xuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzTmFtZVNldC5hZGQoYWxpYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbGF0aXZlRW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvbmU6ICgpID0+IGNsb25lVG8oY29uc3RydWN0U3RhY2soKSksXG4gICAgICAgIHVzZTogKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgcGx1Z2luLmFwcGx5VG9TdGFjayhzdGFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTogKHRvUmVtb3ZlKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRvUmVtb3ZlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiByZW1vdmVCeU5hbWUodG9SZW1vdmUpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiByZW1vdmVCeVJlZmVyZW5jZSh0b1JlbW92ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUJ5VGFnOiAodG9SZW1vdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBpc1JlbW92ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlckNiID0gKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0YWdzLCBuYW1lLCBhbGlhc2VzOiBfYWxpYXNlcyB9ID0gZW50cnk7XG4gICAgICAgICAgICAgICAgaWYgKHRhZ3MgJiYgdGFncy5pbmNsdWRlcyh0b1JlbW92ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxpYXNlcyA9IGdldEFsbEFsaWFzZXMobmFtZSwgX2FsaWFzZXMpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFsaWFzIG9mIGFsaWFzZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXNOYW1lU2V0LmRlbGV0ZShhbGlhcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaXNSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhYnNvbHV0ZUVudHJpZXMgPSBhYnNvbHV0ZUVudHJpZXMuZmlsdGVyKGZpbHRlckNiKTtcbiAgICAgICAgICAgIHJlbGF0aXZlRW50cmllcyA9IHJlbGF0aXZlRW50cmllcy5maWx0ZXIoZmlsdGVyQ2IpO1xuICAgICAgICAgICAgcmV0dXJuIGlzUmVtb3ZlZDtcbiAgICAgICAgfSxcbiAgICAgICAgY29uY2F0OiAoZnJvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xvbmVkID0gY2xvbmVUbyhjb25zdHJ1Y3RTdGFjaygpKTtcbiAgICAgICAgICAgIGNsb25lZC51c2UoZnJvbSk7XG4gICAgICAgICAgICBjbG9uZWQuaWRlbnRpZnlPblJlc29sdmUoaWRlbnRpZnlPblJlc29sdmUgfHwgY2xvbmVkLmlkZW50aWZ5T25SZXNvbHZlKCkgfHwgKGZyb20uaWRlbnRpZnlPblJlc29sdmU/LigpID8/IGZhbHNlKSk7XG4gICAgICAgICAgICByZXR1cm4gY2xvbmVkO1xuICAgICAgICB9LFxuICAgICAgICBhcHBseVRvU3RhY2s6IGNsb25lVG8sXG4gICAgICAgIGlkZW50aWZ5OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TWlkZGxld2FyZUxpc3QodHJ1ZSkubWFwKChtdykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBtdy5zdGVwID8/XG4gICAgICAgICAgICAgICAgICAgIG13LnJlbGF0aW9uICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG13LnRvTWlkZGxld2FyZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TWlkZGxld2FyZU5hbWVXaXRoQWxpYXNlcyhtdy5uYW1lLCBtdy5hbGlhc2VzKSArIFwiIC0gXCIgKyBzdGVwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGlkZW50aWZ5T25SZXNvbHZlKHRvZ2dsZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2dnbGUgPT09IFwiYm9vbGVhblwiKVxuICAgICAgICAgICAgICAgIGlkZW50aWZ5T25SZXNvbHZlID0gdG9nZ2xlO1xuICAgICAgICAgICAgcmV0dXJuIGlkZW50aWZ5T25SZXNvbHZlO1xuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiAoaGFuZGxlciwgY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBtaWRkbGV3YXJlIG9mIGdldE1pZGRsZXdhcmVMaXN0KClcbiAgICAgICAgICAgICAgICAubWFwKChlbnRyeSkgPT4gZW50cnkubWlkZGxld2FyZSlcbiAgICAgICAgICAgICAgICAucmV2ZXJzZSgpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IG1pZGRsZXdhcmUoaGFuZGxlciwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaWRlbnRpZnlPblJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGFjay5pZGVudGlmeSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIHN0YWNrO1xufTtcbmNvbnN0IHN0ZXBXZWlnaHRzID0ge1xuICAgIGluaXRpYWxpemU6IDUsXG4gICAgc2VyaWFsaXplOiA0LFxuICAgIGJ1aWxkOiAzLFxuICAgIGZpbmFsaXplUmVxdWVzdDogMixcbiAgICBkZXNlcmlhbGl6ZTogMSxcbn07XG5jb25zdCBwcmlvcml0eVdlaWdodHMgPSB7XG4gICAgaGlnaDogMyxcbiAgICBub3JtYWw6IDIsXG4gICAgbG93OiAxLFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+middleware-stack@3.0.3/node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@smithy+middleware-stack@3.0.3/node_modules/@smithy/middleware-stack/dist-es/index.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+middleware-stack@3.0.3/node_modules/@smithy/middleware-stack/dist-es/index.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   constructStack: () => (/* reexport safe */ _MiddlewareStack__WEBPACK_IMPORTED_MODULE_0__.constructStack)\n/* harmony export */ });\n/* harmony import */ var _MiddlewareStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MiddlewareStack */ \"(rsc)/./node_modules/.pnpm/@smithy+middleware-stack@3.0.3/node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSttaWRkbGV3YXJlLXN0YWNrQDMuMC4zL25vZGVfbW9kdWxlcy9Ac21pdGh5L21pZGRsZXdhcmUtc3RhY2svZGlzdC1lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhLTAuMC4xLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrbWlkZGxld2FyZS1zdGFja0AzLjAuMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9taWRkbGV3YXJlLXN0YWNrL2Rpc3QtZXMvaW5kZXguanM/YzNkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9NaWRkbGV3YXJlU3RhY2tcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+middleware-stack@3.0.3/node_modules/@smithy/middleware-stack/dist-es/index.js\n");

/***/ })

};
;