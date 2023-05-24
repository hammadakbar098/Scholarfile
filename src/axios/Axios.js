import axios from "axios";

const baseURL = "https://saman-fyp-production-31c0.up.railway.app/";

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

const getTemplateSetId = async () => {
  try {
    var userId = sessionStorage.getItem("id");
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
      sessionStorage.setItem("id", JSON.stringify(apiResponse.data.id));
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
      sessionStorage.setItem("template_type", response.data.template_type);
    })
    .catch(function (error) {
      console.log(error);
    });
  return apiResponse;
};

// Getting profile data Biography, Lab details and postal address
// export const profileData = async (
//   bio,
//   lab,
//   address,
//   designation,
//   institute,
//   contact,
//   name,
//   color
// ) => {

//   var apiResponse;
//   var data = {
//     biography: bio,
//     lab_details: lab,
//     postal_address: address,
//     designation: designation,
//     institute: institute,
//     phone: contact,
//     first_name: name,
//     bg_color: color,
//   };

//   var config = {
//     method: "patch",
//     maxBodyLength: Infinity,
//     url: `${baseURL}users/profile/`,
//     headers: {
//       Authorization: await getToken(),
//     },
//     data: data,
//   };

//   await axios(config)
//     .then(function (response) {
//       console.log(JSON.stringify(response.data));
//       apiResponse = response.data;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   return apiResponse;
// };

export const profileData = async (
  bio,
  lab,
  address,
  designation,
  institute,
  contact,
  name,
  color,
  imageFile
) => {
  var apiResponse;

  // Create a FormData object
  var formData = new FormData();

  // Append the image file to the FormData object
  formData.append("image", imageFile);

  // Append other data to the FormData object
  formData.append("biography", bio);
  formData.append("lab_details", lab);
  formData.append("postal_address", address);
  formData.append("designation", designation);
  formData.append("institute", institute);
  formData.append("phone", contact);
  formData.append("first_name", name);
  formData.append("bg_color", color);

  var config = {
    method: "patch",
    maxBodyLength: Infinity,
    url: `${baseURL}users/profile/`,
    headers: {
      Authorization: await getToken(),
      "Content-Type": "multipart/form-data", // Set the Content-Type header for FormData
    },
    data: formData, // Use the FormData object as the data
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
export const userBio = async (designation, institute, name, imageFile) => {
  var apiResponse;

  // Create a FormData object
  var formData = new FormData();

  // Append the image file to the FormData object
  formData.append("image", imageFile);

  // Append other data to the FormData object
  formData.append("designation", designation);
  formData.append("institute", institute);
  formData.append("first_name", name);

  var config = {
    method: "patch",
    maxBodyLength: Infinity,
    url: `${baseURL}users/profile/`,
    headers: {
      Authorization: await getToken(),
      "Content-Type": "multipart/form-data", // Set the Content-Type header for FormData
    },
    data: formData, // Use the FormData object as the data
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

// Create Education
export const createEducation = async (from, to, title, description) => {
  var response;
  var data = {
    title: title,
    description: description,
    _from: from,
    _to: to,
  };

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${baseURL}users/education/`,
    headers: {
      Authorization: await getToken(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      response = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response;
};

// Create Academic Exp
export const createAcademicExp = async (from, to, title, description) => {
  var response;
  var data = {
    title: title,
    description: description,
    _from: from,
    _to: to,
  };

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${baseURL}users/academic/`,
    headers: {
      Authorization: await getToken(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      response = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response;
};

// Create Awards
export const createAwards = async (from, to, title, description) => {
  var response;
  var data = {
    title: title,
    description: description,
    _from: from,
    _to: to,
  };

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${baseURL}users/awards/`,
    headers: {
      Authorization: await getToken(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      response = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response;
};

// Create Achievments
export const createAchievements = async (from, to, title, description) => {
  var response;
  var data = {
    title: title,
    description: description,
    _from: from,
    _to: to,
  };

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${baseURL}users/achievement/`,
    headers: {
      Authorization: await getToken(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      response = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response;
};

// Create Job openings
export const createJobs = async (from, to, title, description) => {
  var response;
  var data = {
    title: title,
    description: description,
    _from: from,
    _to: to,
  };

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${baseURL}users/job/`,
    headers: {
      Authorization: await getToken(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      response = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response;
};

// Create Fundings
export const createFunding = async (from, to, title, description) => {
  var response;
  var data = {
    title: title,
    description: description,
    _from: from,
    _to: to,
  };

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${baseURL}users/funding/`,
    headers: {
      Authorization: await getToken(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      response = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response;
};

// Get Education
export const getEducation = async () => {
  var res;
  var data = "";

  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${baseURL}users/education/`,
    headers: {
      Authorization: await getToken(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

// Get Education
export const getAcademic = async () => {
  var res;
  var data = "";

  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${baseURL}users/academic/`,
    headers: {
      Authorization: await getToken(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

// Get awards
export const getAwards = async () => {
  var res;
  var data = "";

  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${baseURL}users/awards/`,
    headers: {
      Authorization: await getToken(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

// Get achievements
export const getAchievements = async () => {
  var res;
  var data = "";

  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${baseURL}users/achievement/`,
    headers: {
      Authorization: await getToken(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

// Get jobs
export const getJobs = async () => {
  var res;
  var data = "";

  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${baseURL}users/job/`,
    headers: {
      Authorization: await getToken(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};
// Get fundings
export const getFundings = async () => {
  var res;
  var data = "";

  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${baseURL}users/funding/`,
    headers: {
      Authorization: await getToken(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};
