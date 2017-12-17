import React from 'react';
import Dropzone from '/imports/ui/components/Navigation/Dropzone';
import Jsonify from '/imports/ui/containers/Landing/jsonify';

export default class L extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="main-container">
        <div id="gui" className="padd-section bg-color-blue">
          <div className="container">
            <div className="row-centered">
              <div className="row-centered white-text">
                <div className="col-md-6 col-sm-12 col-centered">
                  <h2 className="section-title text-center blue-text">EDCA-MX</h2>

                  <p>
                    Esta pagina sirve como complemento al <br />
                    <b>
                      <a className="green-text" href="https://github.com/">
                        EDCA-MX, Heramienta de Captura
                      </a>
                    </b>
                  </p>
                </div>
                <div className="mid-container">
                  <Dropzone />
                </div>
                <div className="mid-container v-space">
                  <Jsonify />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
