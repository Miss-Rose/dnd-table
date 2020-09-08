export const selectData = (state) => state.dragReducer;
export const selectTableData = (state) => state.tableReducer.table;

export const selectLeftValues = (state) => {
    const colProp = selectData(state).columns['column-1']['propertyIds'];
    const arrProps = [];
    for (const prop in selectData(state).properties) {
        if (selectData(state).properties.hasOwnProperty(prop)) {
            arrProps.push(selectData(state).properties[prop]);
        }
    }
    const res = [];
    colProp.map(item => {
        return arrProps.map(i => {
            if (i.id === item) {
                res.push(i);
            }
            return res;
        })
    });
    return res;
};

export const selectRightValues = (state) => {
    const selectedCol = Object.values(state.dragReducer.columns)[1];
    let selectProps = null;
    for (const prop in selectedCol) {
        if (selectedCol.hasOwnProperty(prop)) {
            if (prop === 'propertyIds') {
                selectProps = selectedCol[prop]
            }
        }
    }
    return selectProps;
};

export const selectTitles = (state) => {
    const temp = selectData(state).columns['column-2'];
    const data = [];
    for (const prop in temp) {
        if (temp.hasOwnProperty(prop)) {
            if (prop === 'propertyIds') {
                temp[prop].forEach(itemId => {
                    if (itemId === state.dragReducer.properties[itemId].id) {
                        data.push(state.dragReducer.properties[itemId])
                    }
                });
            }
        }
    }
    return data.map(item =>
        item.content
    );
};


export const currentPosts = (state) => {
    return selectSearchedProperties(state, selectLeftValues(state));
};

export const selectSearch = (state) => {
    return state.searchReducer.search;
};

export const selectSearchedProperties = (state, properties) => {
    return properties.filter((item) => {
        return item.content.toLowerCase().indexOf(selectSearch(state).toLowerCase()) > -1;
    });
};
