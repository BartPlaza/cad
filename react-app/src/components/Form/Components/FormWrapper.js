import React from 'react';
import PropTypes from 'prop-types';
import Loader from "../../Loader/Loader";

const formWrapper = (props) => {
    const {title, subtitle, footer, isSending} = props;
    return (
        <div className="columns is-centered">
            <div className="column is-6">
                <div className="card is-6">
                    <div className="card-content">
                        {title && <p className="title">Title</p>}
                        {subtitle && <p className="subtitle">Subtitle</p>}
                        {isSending ? (
                            <Loader/>
                        ):(
                            <form action="">
                                {props.children}
                            </form>
                        )}
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
    footer: PropTypes.string,
    isSending: PropTypes.bool
};

formWrapper.defaultProps = {
    title: '',
    subtitle: '',
    footer: '',
    isSending: false
};

export default formWrapper;