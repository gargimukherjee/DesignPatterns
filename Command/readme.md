Command Pattern
Command pattern is a data driven design pattern and falls under behavioural pattern category. 
A request is wrapped under an object as command and passed to invoker object. 
Invoker object looks for the appropriate object which can handle this command and passes the command 
to the corresponding object which executes the command. 
Always contains a execute method, the parameter contains a notification object which decides the action.