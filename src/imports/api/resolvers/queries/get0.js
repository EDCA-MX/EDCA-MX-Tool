import File0 from '../../collections/file0';

export default function() {
  let file = File0.find().fetch();

  let d = new Date();
  const n = d.toISOString();
  let copy = Object.assign({}, ...file);
  copy.date = '2015-09-30T12:09:30-06:00';
  copy.initiationType = 'ppp';
  copy.tag = ['planning'];
  copy.language = 'es';
  copy.title = 'Desaladora de Sonora';
  copy.description = 'Desaladora de Sonora';

  let template = {
    uri:
      'http://standard.open-contracting.org/examples/mreleases/ocds-213czf-000-00001-02-tender.json',
    version: '1.1',
    extensions: [
      'https://raw.githubusercontent.com/open-contracting/ocds-shareholders-extension/master/extension.json',
      'https://raw.githubusercontent.com/open-contracting/ocds_requirements_extension/master/extension.json',
      'https://raw.githubusercontent.com/open-contracting/ocds_milestone_documents_extension/v1.1.1/extension.json',
      'https://raw.githubusercontent.com/open-contracting/ocds_process_title_extension/v1.1.1/extension.json',
      'https://raw.githubusercontent.com/open-contracting/ocds_bid_extension/v1.1.1/extension.json',
      'https://raw.githubusercontent.com/open-contracting/ocds_lots_extension/v1.1.1/extension.json',
      'https://raw.githubusercontent.com/open-contracting/ocds_documentation_extension/master/extension.json',
      'https://raw.githubusercontent.com/open-contracting/ocds_budget_breakdown_extension/master/extension.json',
      'https://raw.githubusercontent.com/open-contracting/ocds_metrics_extension/master/extension.json',
      'https://raw.githubusercontent.com/open-contracting/ocds_budget_projects_extension/master/extension.json',
      'https://raw.githubusercontent.com/open-contracting/ocds_location_extension/v1.1.1/extension.json',
      'https://raw.githubusercontent.com/open-contracting/public-private-partnerships/master/extension.json',
    ],
    publishedDate: '2014-02-02T13:02:00Z',
    license: 'http://opendatacommons.org/licenses/pddl/1.0/',
    publicationPolicy: 'http://standard.open-contracting.org/examples/releases',
    publisher: {
      name: 'Transparencia Mexicana',
      scheme: 'MX',
      uid: '0000',
      uri: 'https://www.transparency.org/whoweare/contact/org/nc_mexico',
    },
    ocid: 'ocds-tme990513-01-0000',
    releases: [copy],
  };

  return [template];
}
