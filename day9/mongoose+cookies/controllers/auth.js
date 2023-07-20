exports.getLogin = (req,res,next) => {
    console.log(req.session.isLoggedIn);
    res.render("auth/login",{
        path: "/login",
        pageTitle: "Login",
        isAuthenticated: false
    });
};

exports.postLogin = (req,res,next) =>{
    req.isLoggedIn = true;
    res.redirect("/");
};