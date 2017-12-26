let tags = [
  'Planeación',
  'Actualización de Planeación',
  'Licitación',
  'Enmienda de Licitación',
  'Actualización de Licitación',
  'Cancelación de la Licitación',
  'Adjudicación',
  'Actualización de Adjudicación',
  'Cancelación de la Adjudicación',
  'Contrato',
  'Actualización de Contrato',
  'Enmienda del Contrato',
  'Implementación',
  'Actualización de Implementación',
  'Terminación de Contrato',
  'Registro Compilado',
];

const listTags = tags.map(tag =>
  <option key={tag} value={tag}>
    {tag}
  </option>
);

export default listTags;
