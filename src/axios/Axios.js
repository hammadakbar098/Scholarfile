import axios from "axios";

const baseURL = "https://saman-fyp-production.up.railway.app/";

const getToken = async () => {
  try {
    var tkn = sessionStorage.getItem("token");
    var tknParse = JSON.parse(tkn);
    const tokens = `Token ${tknParse}`;
    console.log(tokens + "check");

    return tokens;
  } catch (e) {
    console.log(e);
  }
};

const getuserId = async () => {
  try {
    var userId = sessionStorage.getItem("userId");
    return userId;
  } catch (e) {
    console.log(e);
  }
};

export const signup = async (
  email,
  password,
  firstName,
  lastName,
  university,
  phone,
  designation
) => {
  var apiResponse;
  var data = {
    email: email,
    password: password,
    first_name: firstName,
    last_name: lastName,
    institute: university,
    phone: phone,
    designation: designation,
  };

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${baseURL}users/signup/`,
    headers: {},
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      apiResponse = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return apiResponse;
};

export const login = async (email, password) => {
  var apiResponse;
  var tokenValue;
  var data = { email: email, password: password };

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${baseURL}users/login/`,
    headers: {},
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      apiResponse = response.data;
      tokenValue = JSON.stringify(apiResponse.data.token);
      sessionStorage.setItem("token", tokenValue);
    })
    .catch(function (error) {
      console.log(error);
    });
  return apiResponse;
};

// Getting profile data Biography, Lab details and postal address
export const profileData = async (
  bio,
  lab,
  address,
  designation,
  institute,
  contact,
  name
) => {
  var apiResponse;
  var data = {
    biography: bio,
    lab_details: lab,
    postal_address: address,
    designation: designation,
    institute: institute,
    phone: contact,
    first_name: name,
  };

  var config = {
    method: "patch",
    maxBodyLength: Infinity,
    url: `${baseURL}users/profile/`,
    headers: {
      Authorization: await getToken(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      apiResponse = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return apiResponse;
};

export const userLab = async (lab) => {
  var apiResponse;
  var data = {
    lab_details: lab,
  };

  var config = {
    method: "patch",
    maxBodyLength: Infinity,
    url: `${baseURL}users/profile/`,
    headers: {
      Authorization: await getToken(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      apiResponse = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return apiResponse;
};

export const userDetail = async (bio, address, contact) => {
  var apiResponse;
  var data = {
    biography: bio,
    postal_address: address,
    phone: contact,
  };

  var config = {
    method: "patch",
    maxBodyLength: Infinity,
    url: `${baseURL}users/profile/`,
    headers: {
      Authorization: await getToken(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      apiResponse = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return apiResponse;
};
export const userBio = async (designation, institute, name) => {
  var apiResponse;
  var data = {
    designation: designation,
    institute: institute,
    first_name: name,
  };

  var config = {
    method: "patch",
    maxBodyLength: Infinity,
    url: `${baseURL}users/profile/`,
    headers: {
      Authorization: await getToken(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      apiResponse = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return apiResponse;
};

export const addMembers = async (name, role) => {
  var FormData = require("form-data");
  // var fs = require("fs");
  var data = new FormData();
  data.append("user", name);
  data.append("title", role);
  // data.append(
  //   "image",
  //   fs.createReadStream(
  //     "/Users/themacstore/Desktop/Screenshot 2023-04-26 at 1.13.34 PM.png"
  //   )
  // );

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${baseURL}users/collaboration/`,
    headers: {
      Authorization: await getToken(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getProfile = async () => {
  var apiResponse;
  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${baseURL}users/profile/`,
    headers: {
      Authorization: await getToken(),
    },
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      apiResponse = response.data;
      sessionStorage.setItem("userId", response.data.data.id);
    })
    .catch(function (error) {
      console.log(error);
    });
  return apiResponse;
};

export const handleAddMembers = async (user, title, imageFile) => {
  var res;
  console.log("Working");
  console.log(user, title, imageFile);
  const data = new FormData();
  data.append("user", await getuserId());
  data.append("title", title);
  data.append("image", imageFile); // replace imageFile with your actual image file

  await axios
    .post(`${baseURL}users/collaboration/`, data, {
      headers: {
        Authorization: await getToken(),
        "Content-Type": "multipart/form-data",
      },
    })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

export const getCollabrators = async () => {
  var apiResponse;
  var data = "";

  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${baseURL}users/collaboration/`,
    headers: {
      Authorization: await getToken(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      apiResponse = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return apiResponse;
};

export const selectTemplateType = async (type) => {
  var data = { user_id: await getuserId(), template_type: type };

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${baseURL}users/select-template/`,
    headers: {},
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
