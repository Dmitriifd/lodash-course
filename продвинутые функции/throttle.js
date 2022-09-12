// Разница между debounce и throttle - debounce откладывает выполнение а throttle блокирует
// throttle сначало сработает а потом не будет учитывать никаких действий по заданному wait
_.throttle(func, [(wait = 0)], [(options = {})]) 