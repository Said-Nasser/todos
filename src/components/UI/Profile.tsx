import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="profile">
            <header className="header profile-header col-12 p-0">
                <img src="images/profile-cover-1.jpg" alt="profile cover" width="100%" />
                <div className="row align-items-end px-5 mt-n5">
                    <div className="col-auto">
                        <div className="avatar">
                            <img src="images/img.jpg" alt="Colt Dave" className="rounded-circle" />
                        </div>
                    </div>
                    <div className="col mb- ml-n3 ml-md-n2">
                        <h3 className="header-title mb-0">
                            Michael Dave
                        </h3>
                    </div>
                </div>
            </header>
            <div className="row">
                <div className="col-lg-8">
                    <div className="card mt-4">
                        <div className="card-body">
                            <div className="mb-3">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <Link to="/profile" className="avatar">
                                            <img src="images/img.jpg" alt="..."
                                                className="avatar-img rounded-circle" width="64px" />
                                        </Link>
                                    </div>
                                    <div className="col ml-n2 px-0 px-sm-2">
                                        <h4 className="card-title mb-1">
                                            Michael Dave
                                        </h4>
                                        <p className="card-text small text-muted">
                                            <span className="fe fe-clock"></span>
                                            <time>4hr ago</time>
                                        </p>
                                    </div>
                                    <div className="col-auto">
                                        <div className="dropdown">
                                            <Link to="/profile" className="dropdown-ellipses dropdown-toggle"
                                                role="button" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                                &#9776;
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link to="/profile" className="dropdown-item">
                                                    Action
                                                </Link>
                                                <Link to="/profile" className="dropdown-item">
                                                    Another action
                                                </Link>
                                                <Link to="/profile" className="dropdown-item">
                                                    Something else here
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="mb-3">
                                I've been working on shipping the latest version of Launchday. The
                                story I'm trying to focus on is something
                                like "You're launching soon and need to be 100% focused on your
                                product. Don't lose precious days designing,
                                coding, and testing a product site. Instead, build one in minutes."
                            </p>
                            <p className="mb-4">
                                What do you y'all think? Would love some feedback from
                                <Link to="/profile" className="badge badge-soft-primary">
                                    @Ab
                                </Link>
                                or
                                <Link to="/profile" className="badge badge-soft-primary">
                                    @Adolfo
                                </Link>
                                ?
                            </p>
                            <p className="text-center mb-3">
                                <img src="images/profile-cover-1.jpg" alt="..."
                                    className="img-fluid rounded" />
                            </p>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col">
                                        <Link to="/profile" className="btn btn-sm btn-white">
                                            &#9786; 1
                                        </Link>
                                        <Link to="/profile" className="btn btn-sm btn-white">
                                            &#9785; 2
                                        </Link>

                                    </div>
                                    <div className="col-auto mr-n3">
                                        <div className="avatar-group d-none d-sm-flex">
                                            <Link to="/profile" className="avatar">
                                                <img src="images/img.jpg" alt="..."
                                                    className="avatar-img rounded-circle" width="30px" />
                                            </Link>
                                            <Link to="/profile" className="avatar">
                                                <img src="images/img.jpg" alt="..."
                                                    className="avatar-img rounded-circle" width="30px" />
                                            </Link>
                                            <Link to="/profile" className="avatar">
                                                <img src="images/img.jpg" alt="..."
                                                    className="avatar-img rounded-circle" width="30px" />
                                            </Link>
                                            <Link to="/profile" className="avatar">
                                                <img src="images/img.jpg" alt="..."
                                                    className="avatar-img rounded-circle" width="30px" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <Link to="/profile" className="btn btn-sm btn-white">
                                            Share
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="comment mb-3">
                                <div className="row">
                                    <div className="col-auto">
                                        <Link to="/profile" className="avatar">
                                            <img src="images/img.jpg" alt="..."
                                                className="avatar-img rounded-circle" width="44px" />
                                        </Link>
                                    </div>
                                    <div className="col ml-n2">
                                        <div className="comment-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h5 className="comment-title">
                                                        Ab Hadley
                                                    </h5>
                                                </div>
                                                <div className="col-auto">
                                                    <time className="comment-time">
                                                        11:12
                                                    </time>
                                                </div>
                                            </div>
                                            <p className="comment-text">
                                                Looking good Dianna! I like the image grid on the
                                                left, but it feels like a lot to process and doesn't really 
                                                <em>show</em> 
                                                me what the product
                                                does? I think using a short looping
                                                video or something similar demo'ing the product
                                                might be better?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comment mb-3">
                                <div className="row">
                                    <div className="col-auto">
                                        <Link to="/profile" className="avatar">
                                            <img src="images/img.jpg" alt="..."
                                                className="avatar-img rounded-circle" width="44px" />
                                        </Link>

                                    </div>
                                    <div className="col ml-n2">
                                        <div className="comment-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h5 className="comment-title">
                                                        Adolfo Hess
                                                    </h5>
                                                </div>
                                                <div className="col-auto">
                                                    <time className="comment-time">
                                                        11:12
                                                    </time>
                                                </div>
                                            </div>
                                            <p className="comment-text">
                                                Any chance you're going to link the grid up to a
                                                public gallery of sites built with
                                                Launchday?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <div className="avatar avatar-sm">
                                        <img src="images/img.jpg" alt="..."
                                            className="avatar-img rounded-circle" width="44px" />
                                    </div>
                                </div>
                                <div className="col ml-n2">
                                    <form>
                                        <label className="sr-only">Leave a comment...</label>
                                        <textarea className="form-control form-control-flush"
                                            data-toggle="autosize" rows={1}
                                            placeholder="Leave a comment">
                                        </textarea>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 pl--0">
                    <div className="card mt-4">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h5 className="mb-0">
                                        Birthday
                                    </h5>
                                </div>
                                <div className="col-auto">
                                    <time className="small text-muted">
                                        10/24/88
                                    </time>
                                </div>
                            </div>
                            <hr />
                            <div className="row align-items-center">
                                <div className="col">
                                    <h5 className="mb-0">
                                        Joined
                                    </h5>
                                </div>
                                <div className="col-auto">
                                    <time className="small text-muted">
                                        10/24/18
                                    </time>
                                </div>
                            </div>
                            <hr />
                            <div className="row align-items-center">
                                <div className="col">
                                    <h5 className="mb-0">
                                        Location
                                    </h5>
                                </div>
                                <div className="col-auto">
                                    <small className="text-muted">
                                        Los Angeles, CA
                                    </small>
                                </div>
                            </div>
                            <hr />
                            <div className="row align-items-center">
                                <div className="col">
                                    <h5 className="mb-0">
                                        Website
                                    </h5>
                                </div>
                                <div className="col-auto">
                                    <Link to="/profile" className="small">
                                        admin.evolvice.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;