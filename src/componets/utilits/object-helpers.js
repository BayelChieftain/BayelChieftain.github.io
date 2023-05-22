
export const updateObjectInArray = (items, itemId, objPropName, newPropObj) => {
   return items.map( (u) => {
        if (u[objPropName] === itemId) {
          return {...u, ...newPropObj}
        };
        return u;
      })
}
 