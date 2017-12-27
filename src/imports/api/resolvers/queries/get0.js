import File0 from '../../collections/file0';

export default function() {
  let file = File0.find().fetch();

  let d = new Date();
  const n = d.toISOString();
  let copy = Object.assign({}, ...file);
  copy.date = n;
  copy.initiationType = 'ppp';
  copy.tag = ['planning'];

  let template = {
    uri:
      'http://standard.open-contracting.org/examples/mreleases/ocds-213czf-000-00001-02-tender.json',
    version: '1.1',
    extensions: [
      'https://raw.githubusercontent.com/open-contracting/ocds-shareholders-extension/master/extension.json',
    ],
    publishedDate: '2014-02-02T13:02:00Z',
    license: 'http://opendatacommons.org/licenses/pddl/1.0/',
    publicationPolicy: 'http://standard.open-contracting.org/examples/releases',
    publisher: {
      name: 'Transaparencia Mexicana',
      scheme: 'MX',
      uid: '0000',
      uri: 'https://www.transparency.org/whoweare/contact/org/nc_mexico',
    },
    releases: [copy],
  };

  return [template];
}
