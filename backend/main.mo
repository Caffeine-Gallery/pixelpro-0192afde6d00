import Array "mo:base/Array";
import Text "mo:base/Text";

actor Portfolio {
  public type Section = {
    title: Text;
    content: Text;
  };

  stable var aboutMe : Text = "Web Designer and Developer";
  stable var skills : [Text] = ["Web Design", "Frontend Development", "UI/UX Design"];
  stable var experiences : [Section] = [];
  stable var education : [Section] = [];
  stable var projects : [Section] = [];

  public query func getAboutMe() : async Text {
    aboutMe
  };

  public query func getSkills() : async [Text] {
    skills
  };

  public query func getExperiences() : async [Section] {
    experiences
  };

  public query func getEducation() : async [Section] {
    education
  };

  public query func getProjects() : async [Section] {
    projects
  };

  public func updateAboutMe(newAboutMe: Text) : async () {
    aboutMe := newAboutMe;
  };

  public func addSkill(newSkill: Text) : async () {
    skills := Array.append<Text>(skills, [newSkill]);
  };

  public func addExperience(newExperience: Section) : async () {
    experiences := Array.append<Section>(experiences, [newExperience]);
  };

  public func addEducation(newEducation: Section) : async () {
    education := Array.append<Section>(education, [newEducation]);
  };

  public func addProject(newProject: Section) : async () {
    projects := Array.append<Section>(projects, [newProject]);
  };
}
