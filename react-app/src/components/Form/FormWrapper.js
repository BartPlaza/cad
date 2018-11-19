import React from 'react';
import PropTypes from 'prop-types';

const formWrapper = (props) => {
    const {title, subtitle, footer} = props;
    return (
        <div className="columns is-centered">
            <div className="column is-6">
                <div className="card is-6">
                    <div className="card-content">
                        {title && <p className="title">Title</p>}
                        {subtitle && <p className="subtitle">Subtitle</p>}
                        <form action="">
                            {props.children}
                        </form>
                    </div>
                    {footer && <footer className="card-footer">
                        <p className="card-footer-item">
                            {footer}
                        </p>
                    </footer>}
                </div>
            </div>
        </div>
    )
};

formWrapper.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    footer: PropTypes.string
};

formWrapper.defaultProps = {
    title: '',
    subtitle: '',
    footer: ''
};

export default formWrapper;