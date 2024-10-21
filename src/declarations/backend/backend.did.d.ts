import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Section { 'title' : string, 'content' : string }
export interface _SERVICE {
  'addEducation' : ActorMethod<[Section], undefined>,
  'addExperience' : ActorMethod<[Section], undefined>,
  'addProject' : ActorMethod<[Section], undefined>,
  'addSkill' : ActorMethod<[string], undefined>,
  'getAboutMe' : ActorMethod<[], string>,
  'getEducation' : ActorMethod<[], Array<Section>>,
  'getExperiences' : ActorMethod<[], Array<Section>>,
  'getProjects' : ActorMethod<[], Array<Section>>,
  'getSkills' : ActorMethod<[], Array<string>>,
  'updateAboutMe' : ActorMethod<[string], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
