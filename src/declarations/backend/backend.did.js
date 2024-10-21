export const idlFactory = ({ IDL }) => {
  const Section = IDL.Record({ 'title' : IDL.Text, 'content' : IDL.Text });
  return IDL.Service({
    'addEducation' : IDL.Func([Section], [], []),
    'addExperience' : IDL.Func([Section], [], []),
    'addProject' : IDL.Func([Section], [], []),
    'addSkill' : IDL.Func([IDL.Text], [], []),
    'getAboutMe' : IDL.Func([], [IDL.Text], ['query']),
    'getEducation' : IDL.Func([], [IDL.Vec(Section)], ['query']),
    'getExperiences' : IDL.Func([], [IDL.Vec(Section)], ['query']),
    'getProjects' : IDL.Func([], [IDL.Vec(Section)], ['query']),
    'getSkills' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'updateAboutMe' : IDL.Func([IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
