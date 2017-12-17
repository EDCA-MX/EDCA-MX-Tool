import Emissions from '../../collections/file0';

export default function() {
  let emissions = Emissions.find().fetch();
  let files = [emissions];

  return files;
}
