import test from 'ava';
import Events from '.';

test('Events', t => {
	t.true((typeof Events.onServerRunning === 'function'), 'Events.onServerRunning is not a function.');
	t.true((typeof Events.onServiceRegistered === 'function'), 'Events.onServiceRegistered is not a function.');
	t.true((typeof Events.onServiceUnregistered === 'function'), 'Events.onServiceUnregistered is not a function.');
	t.true((typeof Events.onServiceRegisterError === 'function'), 'Events.onServiceRegisterError is not a function.');
	t.true((typeof Events.onServiceUnregisterError === 'function'), 'Events.onServiceUnregisterError is not a function.');
});
