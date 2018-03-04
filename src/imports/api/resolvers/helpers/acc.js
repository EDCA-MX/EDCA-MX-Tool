import set from 'lodash/set';
import merge from 'lodash/merge';
import find from 'lodash/find';

const filterSheet = function(s) {
  let header = {};
  let content = {};
  let type = {};
  Object.entries(s).filter(value => {
    let row = value[0].match(/[0-9]+/g) ? parseInt(value[0].match(/[0-9]+/g)[0]) : null;
    row >= 7 ? (content[value[0]] = value[1]) : null;
    row === 3 ? (header[value[0].match(/[A-Z]+/g)] = value[1]) : null;
    row === 2 ? (type[value[0].match(/[A-Z]+/g)] = value[1]) : null;
    return value;
  });

  let filteredSheet = {
    header: header,
    content: content,
    types: type,
  };
  return filteredSheet;
};

export default function jsonifyXlsx(sheet) {
  const toType = function() {};
  let data = filterSheet(sheet);

  let columns = Object.entries(data.header).map(d => d[0].match(/[A-Z]+/g)[0]);

  let rows = {};
  Object.entries(data.content).map(d => {
    rows[d[0].match(/[0-9]+/g)] = {};
  });

  let orderedData = {};

  Object.keys(rows).map(row => {
    let currentRow = {};

    columns.map(column => {
      data.content[column + row] && data.types[column].v === 'string'
        ? (data.content[column + row].v = String(data.content[column + row].v))
        : null;

      data.content[column + row]
        ? (currentRow[column] = {
            path: data.header[column].v,
            value: data.content[column + row].v,
          })
        : null;
    });
    orderedData[`row${row}`] = currentRow;
  });

  let release = {};

  Object.entries(orderedData).map(d => {
    let index = d[0].match(/[0-9]+/g)[0];

    Object.entries(d[1]).map(column => {
      let path = column[1].path;

      path = path.replace(/[/]/g, '.');
      path = path.replace('0', `[${index}]`);

      set(release, path, column[1].value);
    });
  });

  return release;
}
